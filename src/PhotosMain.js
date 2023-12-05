import { ErrorContent } from './ErrorContent.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import { Inner } from './Inner.js'
import { AlbumHeading } from './AlbumHeading.js'
import { PhotosList } from './PhotosList.js'
import { AlbumNavBlock } from './AlbumNavBlock.js'
import api from './api.js'
import './PhotosMain.css'

const { Hammer } = window

export class PhotosMain extends Main
{
  static class = 'PhotosMain'

  state = {
    album : null,
    current : 0,
    timer : null,
    error : null,
    busy : false,
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const album = this.state.album
    if(this.state.error) {
      return new ErrorContent
    }
    if(!album) {
      return new Loading
    }
    const section = album.section
    const current = this.state.current
    const prev = this.getIndex(current - 1)
    const next = this.getIndex(current + 1)
    const items = [
      album.items[prev],
      album.items[current],
      album.items[next],
    ]
    if(album.title) {
      document.title = `${ album.title } | ${ api.params.name }`
    }
    return new Inner([
      section && new AlbumHeading({
        section,
        album,
      }),
      this._ref = new PhotosList({
        items,
        classList : ['appear'],
        onclick : this.onClick,
        ontransitionend : this.onTransitionEnd,
      }),
      new AlbumNavBlock({
        current,
        album,
        switchSlide : this.switchSlide,
      }),
    ])
  }

  async mount() {
    await this.#load()
    if(this.state.error) {
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

  destroy() {
    if(this.state.timer) {
      clearTimeout(this.state.timer)
    }
    this.setState({ timer : null })
    this._hammertime?.off('swipe')
    document.removeEventListener('keydown', this.onKeyDown)
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        album : await api.getAlbum(this.props.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }

  tick() {
    const handler = () => {
      this.switchSlide(1)
      this.tick()
    }
    this.setState({
      timer : setTimeout(handler, 5000),
    })
  }

  switchSlide = (shift, stop = false) => {
    if(stop) {
      if(this.state.timer) {
        clearTimeout(this.state.timer)
      }
      this.setState({ timer : null })
    }
    if(this._transition) {
      return
    }
    this._transition = true
    this.setState(state => ({
      current : this.getIndex(state.current + shift),
    }))
  }

  getIndex(i) {
    const items = this.state.album.items
    return i < 0 ?
      items.length + i :
      i % items.length
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
}
