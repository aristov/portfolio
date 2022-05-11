import { HtmlDiv } from 'htmlmodule'
import { Header } from './Header'
import { Inner } from './Inner'
import { Main } from './Main'
import { SlideShow } from './SlideShow'
import { AlbumGroup } from './AlbumGroup'
import { FileList } from './FileList'
import { Contacts } from './Contacts'
import { Blog } from './Blog'
import { ErrorContent } from './ErrorContent'
import './App.css'

export class App extends HtmlDiv
{
  state = {
    open : false,
    data : null,
  }

  render() {
    const path = decodeURIComponent(location.pathname)
    this.class = {
      open : this.state.open,
      homepage : /^\/(?:index\.html)?$/.test(path),
    }
    return new Inner([
      new Header({
        data : this.state.data,
        open : this.state.open,
        toggleNav : this.toggleNav,
        closeNave : this.closeNav,
      }),
      /^\/[а-яё\w]+\/[а-яё\w]+$/i.test(path) ?
        new SlideShow({ path }) :
        api.config.sections.find(section => section.path === path) ?
          new AlbumGroup({ path, key : path }) :
          /^\/Проектирование\/?$/.test(path) ?
            new FileList :
            /^\/Блог\/?$/.test(path) ?
              new Blog({ key : 'blog' }) :
              /^\/Контакты\/?$/.test(path) ?
                new Contacts :
                /^\/(?:index\.html)?$/.test(path) ?
                  new SlideShow({ path : '/', auto : true }) :
                  new Main(new ErrorContent),
      new HtmlDiv({
        className : 'Backdrop',
        onclick : this.closeNav,
      }),
    ])
  }

  componentDidMount() {
    window.onpopstate = () => this.setState()
    document.onclick = e => {
      if(e.target.href && e.target.classList.contains('Link')) {
        this.setState()
      }
    }
  }

  componentWillUnmount() {
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
