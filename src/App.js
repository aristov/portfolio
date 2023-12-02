import { HtmlDiv } from 'htmlmodule'
import { Header } from './Header'
import { Inner } from './Inner'
import { Main } from './Main'
import { SlideShow } from './SlideShow'
import { AlbumGroup } from './AlbumGroup'
import { DocumentList } from './DocumentList'
import { Contacts } from './Contacts'
import { Blog } from './Blog'
import { ErrorContent } from './ErrorContent'
import { router } from './router'
import api from './api'
import './App.css'

export class App extends HtmlDiv
{
  static class = 'App'

  state = {
    open : false,
    data : null,
  }

  render() {
    let path = decodeURIComponent(location.pathname)
    path = path.replace(/\/$/, '')
    path ||= '/'
    this.classList = [
      this.state.open && 'open',
      path === '/' && 'homepage',
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
            key : 'slideshow',
            path,
          }),
        },
        ...api.config.sections.map(section => ({
          path : section.path,
          render : () => new AlbumGroup({
            path,
            key : path,
          }),
        })),
        {
          path : '/Проектирование',
          render : () => new DocumentList({
            key : 'documentlist',
          }),
        },
        {
          path : '/Блог',
          render : () => new Blog({
            key : 'blog',
          }),
        },
        {
          path : '/Контакты',
          render : () => new Contacts({
            key : 'contacts',
          }),
        },
        {
          path : '/',
          render : () => new SlideShow({
            key : 'slideshow',
            path : '/',
            auto : true,
          }),
        },
        {
          path : /.*/,
          render : () => new Main({
            key : 'error',
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
