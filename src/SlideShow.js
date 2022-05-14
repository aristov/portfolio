import { HtmlA, HtmlDiv, HtmlH2 } from 'htmlmodule'
import { ErrorContent } from './ErrorContent'
import { Icon } from './Icon'
import { Loading } from './Loading'
import { Main } from './Main'
import { SlideItem } from './SlideItem'
import { Inner } from './Inner'
import api from './api'
import './SlideShow.css'

const { Hammer } = window

export class SlideShow extends Main
{
  state = {
    album : null,
    current : 0,
    timer : null,
    err : null,
  }

  render() {
    const album = this.state.album
    if(this.state.err) {
      return new ErrorContent
    }
    if(!album) {
      return new Loading
    }
    const section = album.section
    const current = this.state.current
    const prev = this.getIndex(current - 1)
    const next = this.getIndex(current + 1)
    const items = [album.items[prev], album.items[current], album.items[next]]
    if(album.title) {
      document.title = album.title + ' | Лариса Дедловская'
    }
    return new Inner([
      section && new HtmlH2([
        new HtmlA({
          href : section.path,
          onkeydown : this.onBackKeyDown,
          text : section.title,
        }),
        ' → ' + album.title,
      ]),
      this._ref = new SlideList({
        class : ['appear'],
        onclick : this.onClick,
        ontransitionend : this.onTransitionEnd,
        children : items.map((item, i) => new SlideItem({
          item,
          index : i,
          key : item.id,
        })),
      }),
      new SlideControl([
        new SlidePrev({
          onclick : this.onPrevButtonClick,
          onkeydown : this.onButtonKeyDown,
          title : 'Предыдущий слайд',
          children : new Icon('angle-left'),
        }),
        new SlideCounter([current + 1, ' / ', album.items.length]),
        new SlideNext({
          onclick : this.onNextButtonClick,
          onkeydown : this.onButtonKeyDown,
          title : 'Следующий слайд',
          children : new Icon('angle-right'),
        }),
      ]),
    ])
  }

  async componentDidMount() {
    await this.load()
    if(this.state.err) {
      return
    }
    this.props.auto && this.tick()
    this._hammertime = new Hammer(this._ref.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_LEFT) {
        this.switchSlide(1, true)
      }
      else if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.switchSlide(-1, true)
      }
    })
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    this.state.timer && clearTimeout(this.state.timer)
    this.setState({ timer : null })
    this._hammertime?.off('swipe')
    document.removeEventListener('keydown', this.onKeyDown)
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    try {
      this.setState({ album : await api.getAlbum(this.props.path) })
      setTimeout(() => this.setAttr('aria-busy', 'false'))
    }
    catch(err) {
      this.setState({ err })
    }
  }

  tick() {
    this.setState({
      timer : setTimeout(() => {
        this.switchSlide(1)
        this.tick()
      }, 5000),
    })
  }

  switchSlide(shift, stop = false) {
    if(stop) {
      this.state.timer && clearTimeout(this.state.timer)
      this.setState({ timer : null })
    }
    if(this._transition) {
      return
    }
    if(shift > 0) { // fixme https://github.com/patrick-steele-idem/morphdom/issues/200
      this._transition = true
    }
    this.setState(state => ({ current : this.getIndex(state.current + shift) }))
  }

  getIndex(i) {
    const items = this.state.album.items
    return i < 0 ? items.length + i : i % items.length
  }

  onClick = () => {
    this.switchSlide(1, true)
  }

  onKeyDown = e => {
    switch(e.code) {
      case 'ArrowLeft':
        this.switchSlide(-1, true)
        break
      case 'ArrowRight':
      case 'Space':
        this.switchSlide(1, true)
        break
      default:
        void null
    }
  }

  onTransitionEnd = () => {
    this._transition = false
  }

  onPrevButtonClick = () => {
    this.switchSlide(-1, true)
  }

  onNextButtonClick = () => {
    this.switchSlide(1, true)
  }

  onButtonKeyDown = e => {
    e.code === 'Space' && e.stopPropagation()
  }

  onBackKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}

class SlideList extends HtmlDiv
{
}

class SlideControl extends HtmlDiv
{
}

class SlidePrev extends HtmlDiv
{
}

class SlideCounter extends HtmlDiv
{
}

class SlideNext extends HtmlDiv
{
}
