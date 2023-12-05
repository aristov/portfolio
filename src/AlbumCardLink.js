import { Link } from './Link.js'
import { AlbumCardTitle } from './AlbumCardTitle.js'
import './AlbumCardLink.css'

export class AlbumCardLink extends Link
{
  static class = 'AlbumCardLink'

  init() {
    super.init()
    this.on('keydown', this.onKeyDown)
  }

  assign() {
    super.assign()
    const album = this.props.album
    const size = album.sizes.find(
      size => size.type === 'r',
    )
    const url = size.src
    this.href = album.path
    this.style = {
      backgroundImage : `url(${ url })`,
    }
  }

  render() {
    return new AlbumCardTitle(this.props.album.title)
  }

  onKeyDown(e) {
    const target = e.nativeEvent.target
    switch(e.code) {
      case 'Space':
        target.click()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        target.previousElementSibling?.focus()
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        target.nextElementSibling?.focus()
        break
      default:
        void null
    }
  }
}
