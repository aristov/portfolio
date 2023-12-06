import { HtmlDiv } from 'htmlmodule'
import { Header } from './Header.js'
import { Inner } from './Inner.js'
import { Main } from './Main.js'
import { PhotosMain } from './PhotosMain.js'
import { AlbumsMain } from './AlbumsMain.js'
import { DocumentsMain } from './DocumentsMain.js'
import { ContactsMain } from './ContactsMain.js'
import { ArticlesMain } from './ArticlesMain.js'
import { ErrorContent } from './ErrorContent.js'
import { Backdrop } from './Backdrop.js'
import { router } from './router.js'
import api from './api.js'
import './App.css'

export class App extends HtmlDiv
{
  static class = 'App'

  static sections = {
    albums : AlbumsMain,
    documents : DocumentsMain,
    articles : ArticlesMain,
    contacts : ContactsMain,
  }

  static #getPath() {
    const pathname = decodeURIComponent(location.pathname)
    const key = pathname.replace(/\/$/, '')
    return key || '/'
  }

  state = {
    path : App.#getPath(),
    open : false,
    data : null,
  }

  init() {
    this.on('nav-toggle', this.#onNavToggle)
    this.on('nav-close', this.#onNavClose)
    window.addEventListener('popstate', this.#onPopState)
    document.addEventListener('click', this.#onDocClick)
  }

  destroy() {
    window.removeEventListener('popstate', this.#onPopState)
    document.removeEventListener('click', this.#onDocClick)
  }

  render() {
    const state = this.state
    const path = state.path
    const key = path
    this.classList = [
      state.open && 'open',
      key === '/' && 'homepage',
    ]
    return new Inner([
      new Header({
        data : state.data,
        open : state.open,
      }),
      router([
        {
          path : /^\/[а-яёй\w\-]+\/[а-яёй\w\-]+$/i,
          render : () => new PhotosMain({ key, path }),
        },
        ...api.params.sections.map(section => ({
          path : section.path,
          render : () => {
            const constructor = App.sections[section.type]
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
    ])
  }

  #onNavToggle() {
    this.setState(state => ({
      open : !state.open,
    }))
  }

  #onNavClose() {
    this.setState({ open : false })
  }

  #onPopState = () => {
    this.setState({
      path : App.#getPath(),
    })
  }

  #onDocClick = e => {
    if(!e.target.closest('.Link')) {
      return
    }
    this.setState({
      path : App.#getPath(),
    })
  }
}
