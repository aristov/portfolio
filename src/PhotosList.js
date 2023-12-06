import lodash from 'lodash'
import { HtmlDiv } from 'htmlmodule'
import { PhotoImg } from './PhotoImg.js'
import './PhotosList.css'

export class PhotosList extends HtmlDiv
{
  static class = 'PhotosList'

  #x

  state = {
    zoomed : false,
  }

  init() {
    this.on('contextmenu', this.#onContextMenu)
    this.on('pointerdown', this.#onPointerDown)
    this.on('photo-zoom', this.#onPhotoZoom)
  }

  #onPhotoZoom() {
    this.setState(state => ({
      zoomed : !state.zoomed,
    }))
  }

  render() {
    return this.props.items.map(
      (item, i) => new PhotoImg({
        key : item.id,
        item,
        index : i,
        zoomed : this.state.zoomed,
      }),
    )
  }

  #onContextMenu() {
    this.off('pointermove', this.#onPointerMove)
    this.off('pointerup', this.#onPointerUp)
  }

  #onPointerDown(e) {
    if(this.props.transition) {
      return
    }
    this.#x = e.x
    this.photos.forEach(img => {
      img.style.transition = 'none'
    })
    this.on('pointermove', this.#onPointerMove, { passive : true })
    this.on('pointerup', this.#onPointerUp, { once : true })
    document.documentElement.style.overflow = 'hidden'
  }

  #onPointerMove(e) {
    const x = lodash.clamp(e.x, 0, innerWidth)
    const dX = x - this.#x
    this.photos.forEach(img => img.setX(dX))
  }

  #onPointerUp(e) {
    const dX = e.x - this.#x
    this.photos.forEach(img => {
      img.style.transition = null
    })
    this.off('pointermove', this.#onPointerMove)
    document.documentElement.style.overflow = null
    if(!dX) {
      return
    }
    this.emit('photo-switch', {
      bubbles : true,
      detail : {
        offset : -dX / Math.abs(dX),
      },
    })
  }

  get photos() {
    return this.findAll(PhotoImg)
  }
}
