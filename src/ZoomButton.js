import { HtmlButton } from 'htmlmodule'
import { Icon } from './Icon.js'
import './ZoomButton.css'

export class ZoomButton extends HtmlButton
{
  static class = 'ZoomButton'

  init() {
    super.init()
    this.on('click', this.#onClick)
  }

  render() {
    return new Icon(
      this.props.zoomed ? 'zoom-out' : 'zoom-in',
    )
  }

  #onClick() {
    this.emit('photo-zoom', {
      bubbles : true,
    })
  }
}
