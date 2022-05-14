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
import { router } from './router'
import './App.css'

export class App extends HtmlDiv
{
  state = {
    open : false,
    data : null,
  }

  render() {
    const path = decodeURIComponent(location.pathname).replace(/\/$/, '') || '/'
    this.class = {
      open : this.state.open,
      homepage : path === '/',
    }
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
          render : () => new SlideShow({ path }),
        },
        ...api.config.sections.map(section => ({
          path : section.path,
          render : () => new AlbumGroup({ path, key : path }),
        })),
        {
          path : '/Проектирование',
          render : () => new FileList,
        },
        {
          path : '/Блог',
          render : () => new Blog,
        },
        {
          path : '/Контакты',
          render : () => new Contacts,
        },
        {
          path : '/',
          render : () => new SlideShow({ path : '/', auto : true }),
        },
        {
          path : /.*/,
          render : () => new Main(new ErrorContent),
        },
      ]),
      new Backdrop({ onclick : this.closeNav }),
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

class Backdrop extends HtmlDiv
{
}
