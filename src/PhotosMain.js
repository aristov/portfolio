import { ErrorContent } from './ErrorContent.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import { Inner } from './Inner.js'
import { AlbumHeading } from './AlbumHeading.js'
import { PhotosList } from './PhotosList.js'
import { ZoomButton } from './ZoomButton.js'
import { AlbumNavBlock } from './AlbumNavBlock.js'
import api from './api.js'
import './PhotosMain.css'

const TIMEOUT_DELAY = 5000

export class PhotosMain extends Main
{
  static class = 'PhotosMain'

  #timeoutId = null

  state = {
    current : 0,
    album : null,
    error : null,
    busy : false,
    zoomed : false,
    transition : false,
  }

  init() {
    super.init()
    this.on('transitionend', this.#onTransitionEnd)
    this.on('photo-switch', this.#onPhotoSwitch)
    this.on('photo-zoom', this.#onPhotoZoom)
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const { album, zoomed, current, transition, error } = this.state
    if(error) {
      return new ErrorContent({ error })
    }
    if(!album) {
      return new Loading
    }
    const section = album.section
    const prev = this.#getIndex(current - 1)
    const next = this.#getIndex(current + 1)
    const items = [
      album.items[prev],
      album.items[current],
      album.items[next],
    ]
    if(album.title) {
      document.title = `${ album.title } | ${ api.params.name }`
    }
    return new Inner([
      section && new AlbumHeading({ section, album }),
      new PhotosList({
        items,
        zoomed,
        transition,
        classList : ['appear'],
        onclick : this.#onListClick,
      }),
      new ZoomButton({ zoomed }),
      new AlbumNavBlock({ current, album }),
    ])
  }

  async mount() {
    await this.#load()
    if(this.state.error) {
      return
    }
    if(this.props.auto) {
      this.#setTimeout()
    }
    document.addEventListener('keydown', this.#onKeyDown)
  }

  destroy() {
    if(this.#timeoutId) {
      clearTimeout(this.#timeoutId)
    }
    this.#timeoutId = null
    document.removeEventListener('keydown', this.#onKeyDown)
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        album : await api.getAlbum(this.props.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }

  #setTimeout() {
    this.#timeoutId = setTimeout(this.#onTimeout, TIMEOUT_DELAY)
  }

  #onTimeout = () => {
    this.#switchPhoto(1)
    this.#setTimeout()
  }

  #clearTimeout() {
    if(this.#timeoutId) {
      clearTimeout(this.#timeoutId)
    }
    this.#timeoutId = null
  }

  #switchPhoto(offset, stop = false) {
    if(stop) {
      this.#clearTimeout()
    }
    if(this.state.transition) {
      return
    }
    this.setState(state => ({
      current : this.#getIndex(state.current + offset),
      transition : true,
    }))
  }

  #getIndex(i) {
    const items = this.state.album.items
    return i < 0 ?
      items.length + i :
      i % items.length
  }

  #onListClick = () => {
    this.#clearTimeout()
  }

  #onKeyDown = e => {
    switch(e.code) {
      case 'ArrowLeft':
        this.#switchPhoto(-1, true)
        break
      case 'ArrowRight':
      case 'Space':
        this.#switchPhoto(1, true)
        break
    }
  }

  #onTransitionEnd() {
    this.setState({ transition : false })
  }

  #onPhotoSwitch(e) {
    this.#switchPhoto(e.detail.offset, true)
  }

  #onPhotoZoom() {
    this.setState(state => ({
      zoomed : !state.zoomed,
    }))
  }
}
