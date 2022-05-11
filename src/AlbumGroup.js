import { HtmlDiv, HtmlH2 } from 'htmlmodule'
import { ErrorPage } from './ErrorPage'
import { Loading } from './Loading'
import { Link } from './Link'
import api from './api'
import './AlbumGroup.css'

export class AlbumGroup extends HtmlDiv
{
  state = {
    group : null,
    busy : true,
    err : null,
  }

  render() {
    const { group, err } = this.state
    if(err) {
      return new ErrorPage
    }
    if(!group) {
      return new Loading
    }
    document.title = group.title + ' | Лариса Дедловская'
    this.class = ['appear']
    this.setAttr('aria-busy', this.state.busy)
    return [
      new HtmlDiv({
        className : 'AlbumItem',
        children : new HtmlH2(group.title),
      }),
      group.items.map(album => new AlbumItem({ key : album.id, album })),
    ]
  }

  componentDidMount() {
    void this.load()
  }

  componentDidUpdate(prevProps) {
    if(this.props.path !== prevProps.path) {
      this.setState({ busy : true })
      void this.load()
    }
  }

  async load() {
    try {
      this.setState({ group : await api.getSection(this.props.path) })
      setTimeout(() => this.setState({ busy : false }))
    }
    catch(err) {
      this.setState({ err })
    }
  }
}

class AlbumItem extends Link
{
  render() {
    const album = this.props.album
    const url = album.sizes.find(size => size.type === 'r').src
    this.href = album.path
    this.style = { backgroundImage : `url(${ url })` }
    this.onkeydown = this.onKeyDown
    return new HtmlDiv({ className : 'AlbumInfo', text : album.title })
  }

  onKeyDown = e => {
    switch(e.code) {
      case 'Space':
        e.target.click()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        e.target.previousElementSibling?.focus()
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        e.target.nextElementSibling?.focus()
        break
      default:
        void null
    }
  }
}
