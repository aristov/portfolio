import { ErrorContent } from './ErrorContent.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import { Inner } from './Inner.js'
import { AlbumHeading } from './AlbumHeading.js'
import { PhotosList } from './PhotosList.js'
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
    transition : false,
  }

  init() {
    super.init()
    this.on('photo-switch', this.#onPhotoSwitch)
    this.on('transitionend', this.#onTransitionEnd)
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const album = this.state.album
    if(this.state.error) {
      return new ErrorContent
    }
    if(!album) {
      return new Loading
    }
    const section = album.section
    const current = this.state.current
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
      section && new AlbumHeading({
        section,
        album,
      }),
      new PhotosList({
        items,
        classList : ['appear'],
        transition : this.state.transition,
        onclick : this.#onListClick,
      }),
      new AlbumNavBlock({
        current,
        album,
      }),
    ])
  }

  async mount() {
    await this.#load()
    if(this.state.error) {
      return
    }
    if(this.props.auto) {
      this.#tick()
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

  #tick() {
    const handler = () => {
      this.#switchPhoto(1)
      this.#tick()
    }
    this.#timeoutId = setTimeout(handler, TIMEOUT_DELAY)
  }

  #stopTick() {
    if(this.#timeoutId) {
      clearTimeout(this.#timeoutId)
    }
    this.#timeoutId = null
  }

  #switchPhoto(offset, stop = false) {
    if(stop) {
      this.#stopTick()
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
    this.#stopTick()
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
}
