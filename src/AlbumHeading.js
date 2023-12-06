import { Heading } from './Heading.js'
import { Link } from './Link.js'
import './AlbumHeading.css'

export class AlbumHeading extends Heading
{
  static class = 'AlbumHeading'

  render() {
    return [
      new Link({
        to : this.props.section.path,
        children : this.props.section.title,
        onkeydown : this.#onKeyDown,
      }),
      ' → ',
      this.props.album.title,
    ]
  }

  #onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}
