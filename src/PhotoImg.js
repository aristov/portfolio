import lodash from 'lodash'
import { RoleImg } from 'htmlmodule'
import './PhotoImg.css'

export class PhotoImg extends RoleImg
{
  static class = 'PhotoImg'

  static defaultProps = {
    draggable : 'false',
  }

  #timeoutId = null
  #mounted = false
  #startPointerX
  #startPointerY
  #offsetX = 0
  #offsetY = 0

  init() {
    super.init()
    this.on('click', this.#onClick)
    this.on('pointerdown', this.#onPointerDown)
    this.on('double-click', this.#onDoubleClick)
    window.addEventListener('resize', this.#onWinResize)
  }

  assign() {
    super.assign()
    const photo = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const url = photo.url
    const index = this.props.index - 1
    const x = index * 100
    this.style = {
      transform : `translateX(${ x }%)`,
      backgroundImage : `url(${ url })`,
      backgroundSize : this.#getBackgroundSize(),
      backgroundPositionX : this.props.zoomed ?
        `calc(50% + ${ this.#offsetX }px)` :
        null,
      backgroundPositionY : this.props.zoomed ?
        `calc(50% + ${ this.#offsetY }px)` :
        null,
    }
  }

  mount() {
    super.mount()
    this.#mounted = true
    this.style.backgroundSize = this.#getBackgroundSize()
  }

  update(prevProps, prevState) {
    super.update(prevProps, prevState)
    if(prevProps.zoomed && !this.props.zoomed) {
      this.#offsetX = 0
      this.#offsetY = 0
    }
  }

  destroy() {
    super.destroy()
    window.removeEventListener('resize', this.#onWinResize)
  }

  setX(x) {
    const index = this.props.index - 1
    const percent = index * 100
    const translateX = `calc(${ percent }% + ${ x }px)`
    this.style.transform = `translateX(${ translateX })`
  }

  #getPhotoWidth() {
    const rect = this.node.getBoundingClientRect()
    const photo = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const k = rect.height / photo.height
    const width = photo.width * k
    return this.props.zoomed ?
      Math.max(rect.width, width) :
      Math.min(rect.width, width)
  }

  #getPhotoHeight() {
    const rect = this.node.getBoundingClientRect()
    const photo = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const k = rect.width / photo.width
    const height = photo.height * k
    return this.props.zoomed ?
      Math.max(rect.height, height) :
      Math.min(rect.height, height)
  }

  #getBackgroundSize() {
    if(!this.#mounted) {
      return this.props.zoomed ? 'cover' : 'contain'
    }
    const width = this.#getPhotoWidth()
    return width + 'px'
  }

  #getOffsetX(clientX) {
    const rect = this.node.getBoundingClientRect()
    const pointerX = lodash.clamp(clientX, rect.left, rect.right)
    const offsetX = this.#offsetX + pointerX - this.#startPointerX
    const photoWidth = this.#getPhotoWidth()
    const limit = photoWidth / 2 - rect.width / 2
    return lodash.clamp(offsetX, -limit, limit)
  }

  #getOffsetY(clientY) {
    const rect = this.node.getBoundingClientRect()
    const pointerY = lodash.clamp(clientY, rect.top, rect.bottom)
    const offsetY = this.#offsetY + pointerY - this.#startPointerY
    const photoHeight = this.#getPhotoHeight()
    const limit = photoHeight / 2 - rect.height / 2
    return lodash.clamp(offsetY, -limit, limit)
  }

  #moved = false

  #onClick(e) {
    if(this.#moved) {
      this.#moved = false
      return
    }
    const handler = () => this.#timeoutId = null
    if(!this.#timeoutId) {
      this.#timeoutId = setTimeout(handler, 500)
      return
    }
    clearTimeout(this.#timeoutId)
    this.#timeoutId = null
    this.emit('double-click', {
      bubbles : true,
      clickEvent : e,
    })
  }

  #onPointerDown(e) {
    if(!this.props.zoomed) {
      return
    }
    this.#startPointerX = e.x
    this.#startPointerY = e.y
    this.style.transition = 'none'
    this.on('pointermove', this.#onPointerMove, { passive : true })
    this.on('pointerup', this.#onPointerUp, { once : true })
  }

  #onPointerMove(e) {
    const offsetX = this.#getOffsetX(e.x)
    const offsetY = this.#getOffsetY(e.y)
    this.style.backgroundPositionX = `calc(50% + ${ offsetX }px)`
    this.style.backgroundPositionY = `calc(50% + ${ offsetY }px)`
    this.#moved = true
  }

  #onPointerUp(e) {
    this.#offsetX = this.#getOffsetX(e.x)
    this.#offsetY = this.#getOffsetY(e.y)
    this.style.transition = null
    this.off('pointermove', this.#onPointerMove)
  }

  #onDoubleClick() {
    this.emit('photo-zoom', { bubbles : true })
  }

  #onWinResize = () => {
    this.style.backgroundSize = this.#getBackgroundSize()
  }
}
