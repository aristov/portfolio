import { RoleImg } from 'htmlmodule'
import './PhotoImg.css'

export class PhotoImg extends RoleImg
{
  static class = 'PhotoImg'

  #timeoutId = null
  #mounted = false

  init() {
    super.init()
    this.on('click', this.#onClick)
    this.on('double-click', this.#onDoubleClick)
    window.addEventListener('resize', this.#onWinResize)
  }

  destroy() {
    super.destroy()
    window.removeEventListener('resize', this.#onWinResize)
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
      backgroundSize : this.#getSize(),
    }
  }

  mount() {
    super.mount()
    this.#mounted = true
    this.style.backgroundSize = this.#getSize()
  }

  setX(x) {
    const index = this.props.index - 1
    const percent = index * 100
    this.style.transform = `translateX(calc(${ percent }% + ${ x }px))`
  }

  #getSize() {
    if(!this.#mounted) {
      return this.props.zoomed ? 'cover' : 'contain'
    }
    const node = this.node
    const photo = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const k = node.offsetHeight / photo.height
    const width = photo.width * k
    const result = this.props.zoomed ?
      Math.max(node.offsetWidth, width) :
      Math.min(node.offsetWidth, width)
    return result + 'px'
  }

  #onClick() {
    const handler = () => this.#timeoutId = null
    if(!this.#timeoutId) {
      this.#timeoutId = setTimeout(handler, 500)
      return
    }
    clearTimeout(this.#timeoutId)
    this.#timeoutId = null
    this.emit('double-click', { bubbles : true })
  }

  #onDoubleClick() {
    this.emit('photo-zoom', { bubbles : true })
  }

  #onWinResize = () => {
    this.style.backgroundSize = this.#getSize()
  }
}
