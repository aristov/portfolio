import { HtmlDiv } from 'htmlmodule'
import { PhotoImg } from './PhotoImg.js'
import './PhotosList.css'

const { Hammer } = window

export class PhotosList extends HtmlDiv
{
  static class = 'PhotosList'

  #hammertime

  render() {
    return this.props.items.map(
      (item, i) => new PhotoImg({
        key : item.id,
        index : i,
        item,
      }),
    )
  }

  mount() {
    this.#hammertime = new Hammer(this.node)
    this.#hammertime.on('swipe', this.#onSwipe)
  }

  destroy() {
    this.#hammertime.off('swipe')
  }

  #onSwipe = e => {
    switch(e.direction) {
      case Hammer.DIRECTION_LEFT:
        this.emit('photo-switch', {
          bubbles : true,
          detail : { offset : 1 },
        })
        break
      case Hammer.DIRECTION_RIGHT:
        this.emit('photo-switch', {
          bubbles : true,
          detail : { offset : -1 },
        })
        break
    }
  }
}
