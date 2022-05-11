import { HtmlDiv } from 'htmlmodule'
import { Link } from './Link'

export class AlbumItem extends Link
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
