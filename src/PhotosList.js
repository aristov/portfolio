import lodash from 'lodash'
import { HtmlDiv } from 'htmlmodule'
import { PhotoImg } from './PhotoImg.js'
import './PhotosList.css'

const WHEEL_DEBOUNCE_DELAY = 50

export class PhotosList extends HtmlDiv
{
  static class = 'PhotosList'

  static defaultProps = {
    draggable : 'false',
  }

  #startPointerX

  init() {
    const onWheel = lodash.debounce(this.#onWheel, WHEEL_DEBOUNCE_DELAY, {
      leading : true,
      trailing : false,
    })
    this.on('wheel', onWheel)
    this.on('contextmenu', this.#onContextMenu)
    this.on('pointerdown', this.#onPointerDown)
  }

  #onWheel = e => {
    const absX = Math.abs(e.deltaX)
    const absY = Math.abs(e.deltaY)
    if(absX < absY) {
      return
    }
    this.emit('photo-switch', {
      bubbles : true,
      detail : {
        offset : e.deltaX / absX,
      },
    })
  }

  render() {
    return this.props.items.map(
      (item, i) => new PhotoImg({
        key : item.id,
        item,
        index : i,
        zoomed : this.props.zoomed,
      }),
    )
  }

  #onContextMenu() {
    this.off('pointermove', this.#onPointerMove)
    this.off('pointerup', this.#onPointerUp)
  }

  #onPointerDown(e) {
    if(this.props.transition || this.props.zoomed) {
      return
    }
    this.#startPointerX = e.x
    this.photos.forEach(img => {
      img.style.transition = 'none'
    })
    this.on('pointermove', this.#onPointerMove, { passive : true })
    this.on('pointerup', this.#onPointerUp, { once : true })
    document.documentElement.style.overflow = 'hidden'
  }

  #onPointerMove(e) {
    const rect = this.node.getBoundingClientRect()
    const clientX = lodash.clamp(e.x, rect.left, rect.right)
    const offsetX = clientX - this.#startPointerX
    this.photos.forEach(img => img.setX(offsetX))
  }

  #onPointerUp(e) {
    const offsetX = e.x - this.#startPointerX
    this.photos.forEach(img => {
      img.style.transition = null
    })
    this.off('pointermove', this.#onPointerMove)
    document.documentElement.style.overflow = null
    if(!offsetX) {
      return
    }
    this.emit('photo-switch', {
      bubbles : true,
      detail : {
        offset : -offsetX / Math.abs(offsetX),
      },
    })
  }

  get photos() {
    return this.findAll(PhotoImg)
  }
}
