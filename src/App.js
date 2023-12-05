import { HtmlDiv } from 'htmlmodule'
import { Header } from './Header.js'
import { Inner } from './Inner.js'
import { Main } from './Main.js'
import { SlideShow } from './SlideShow.js'
import { AlbumGroup } from './AlbumGroup.js'
import { DocumentList } from './DocumentList.js'
import { Contacts } from './Contacts.js'
import { Blog } from './Blog.js'
import { ErrorContent } from './ErrorContent.js'
import { router } from './router.js'
import api from './api.js'
import './App.css'

export class App extends HtmlDiv
{
  static class = 'App'

  static #getKey() {
    const pathname = decodeURIComponent(location.pathname)
    const key = pathname.replace(/\/$/, '')
    return key || '/'
  }

  static sections = {
    albums : AlbumGroup,
    documents : DocumentList,
    articles : Blog,
    contacts : Contacts,
  }

  state = {
    open : false,
    data : null,
  }

  render() {
    const key = App.#getKey()
    this.classList = [
      this.state.open && 'open',
      key === '/' && 'homepage',
    ]
    return new Inner([
      new Header({
        data : this.state.data,
        open : this.state.open,
        toggleNav : this.toggleNav,
        closeNav : this.closeNav,
      }),
      router([
        {
          path : /^\/[а-яёй\w\-]+\/[а-яёй\w\-]+$/i,
          render : () => new SlideShow({
            key,
            path : key,
          }),
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
          render : () => new SlideShow({
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
      new Backdrop({ onclick : this.closeNav }),
    ])
  }

  mount() {
    window.onpopstate = () => this.setState({})
    document.onclick = e => {
      e.target.closest('.Link') && this.setState({})
    }
  }

  destroy() {
    window.onpopstate = null
    document.onclick = null
  }

  toggleNav = () => {
    this.setState(state => ({ open : !state.open }))
  }

  closeNav = () => {
    this.setState({ open : false })
  }
}

class Backdrop extends HtmlDiv
{
  static class = 'Backdrop'
}
