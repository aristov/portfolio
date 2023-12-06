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

export class AppContent extends HtmlDiv
{
  static class = 'AppContent'

  static sections = {
    albums : AlbumsMain,
    documents : DocumentsMain,
    articles : ArticlesMain,
    contacts : ContactsMain,
  }

  state = {
    open : false,
  }

  init() {
    super.init()
    this.on('nav-toggle', this.#onNavToggle)
    this.on('nav-close', this.#onNavClose)
  }

  assign() {
    super.assign()
    this.classList = [
      this.state.open && 'open',
    ]
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

  #onNavToggle() {
    this.setState(state => ({
      open : !state.open,
    }))
  }

  #onNavClose() {
    this.setState({ open : false })
  }
}
