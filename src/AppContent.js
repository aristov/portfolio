import lodash from 'lodash'
import { HtmlDiv } from 'htmlmodule'
import { Header } from './Header.js'
import { PhotosMain } from './PhotosMain.js'
import { Main } from './Main.js'
import { ErrorContent } from './ErrorContent.js'
import { Backdrop } from './Backdrop.js'
import { AlbumsMain } from './AlbumsMain.js'
import { DocumentsMain } from './DocumentsMain.js'
import { ArticlesMain } from './ArticlesMain.js'
import { ContactsMain } from './ContactsMain.js'
import { router } from './router.js'
import api from './api.js'
import './AppContent.css'

const MOBILE_MAX_WITH = 899
const TRANSLATEX_INITIAL = 0
const TRANSLATEX_K_MIN = .8
const TRANSLATEX_PX_MAX = 400

export class AppContent extends HtmlDiv
{
  static class = 'AppContent'

  static sections = {
    albums : AlbumsMain,
    documents : DocumentsMain,
    articles : ArticlesMain,
    contacts : ContactsMain,
  }

  #translateX = null
  #pointerX = null
  #prevPointerX = null
  #startPointerX = null

  state = {
    open : false,
  }

  init() {
    super.init()
    this.on('nav-toggle', this.#onNavToggle)
    this.on('nav-close', this.#onNavClose)
    this.on('pointerdown', this.#onPointerDown)
    this.on('contextmenu', this.#onContextMenu)
    window.addEventListener('resize', this.#onWindowResize)
  }

  assign() {
    super.assign()
    this.classList = this.state.open && 'open'
    this.#updatePosition()
  }

  render() {
    const path = this.props.path
    const key = path
    return [
      new Header({
        open : this.state.open,
      }),
      router([
        {
          path : /^\/[а-яёй\w\-]+\/[а-яёй\w\-]+$/i,
          render : () => new PhotosMain({ key, path }),
        },
        ...api.params.sections.map(section => ({
          path : section.path,
          render : () => {
            const constructor = AppContent.sections[section.type]
            return new constructor({ key, section })
          },
        })),
        {
          path : '/',
          render : () => new PhotosMain({
            key,
            path : '/',
            auto : true,
          }),
        },
        {
          path : /.*/,
          render : () => new Main({
            key,
            children : new ErrorContent,
          }),
        },
      ]),
      new Backdrop({
        onclick : () => {
          this.emit('nav-close', { bubbles : true })
        },
      }),
    ]
  }

  destroy() {
    super.destroy()
    window.removeEventListener('resize', this.#onWindowResize)
  }

  #updatePosition(translateX) {
    if(typeof translateX === 'number') {
      this.style.transition = 'none'
      this.style.transform = `translateX(${ translateX }px)`
      return
    }
    this.#translateX = this.state.open ?
      -Math.min(TRANSLATEX_PX_MAX, innerWidth * TRANSLATEX_K_MIN) :
      TRANSLATEX_INITIAL
    this.style.transition = null
    this.style.transform = `translateX(${ this.#translateX }px)`
  }

  #onContextMenu() {
    this.off('pointermove', this.#onPointerMove)
    this.off('pointerup', this.#onPointerUp)
  }

  #onPointerDown(e) {
    if(!this.state.open || innerWidth > MOBILE_MAX_WITH) {
      return
    }
    this.#pointerX = null
    this.#prevPointerX = null
    this.#startPointerX = e.x
    this.on('pointermove', this.#onPointerMove, { passive : true })
    this.on('pointerup', this.#onPointerUp, { once : true })
    document.documentElement.style.overflow = 'hidden'
  }

  #onPointerMove(e) {
    const pointerX = lodash.clamp(e.x, 0, innerWidth)
    const offsetX = pointerX - this.#startPointerX
    if(offsetX <= 0) {
      return
    }
    this.#pointerX = this.#prevPointerX ?? pointerX
    this.#prevPointerX = pointerX
    this.#updatePosition(this.#translateX + offsetX)
  }

  #onPointerUp(e) {
    this.off('pointermove', this.#onPointerMove)
    document.documentElement.style.overflow = null
    if(this.#pointerX === null) {
      return
    }
    if(e.x > this.#pointerX) {
      this.setState({ open : false })
    }
    else this.#updatePosition()
    this.#pointerX = null
    this.#prevPointerX = null
    this.#startPointerX = null
  }

  #onNavToggle() {
    this.setState(state => ({
      open : !state.open,
    }))
  }

  #onNavClose() {
    this.setState({ open : false })
  }

  #onWindowResize = () => {
    this.#updatePosition()
  }
}
