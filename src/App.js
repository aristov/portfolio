import { HtmlDiv, HtmlMain } from 'htmlmodule'
import { Header } from './Header'
import { SlideShow } from './SlideShow'
import { AlbumGroup } from './AlbumGroup'
import { FileList } from './FileList'
import { Contacts } from './Contacts'
import { Blog } from './Blog'
import { ErrorPage } from './ErrorPage'
import './App.css'

export class App extends HtmlDiv
{
  state = {
    open : false,
    data : null,
  }

  toggleNav = () => {
    this.setState(state => ({ open : !state.open }))
  }

  closeNav = () => {
    this.setState({ open : false })
  }

  render() {
    const path = decodeURIComponent(location.pathname)
    this.class = {
      open : this.state.open,
      homepage : /^\/(?:index\.html)?$/.test(path),
    }
    return new HtmlDiv({
      className : 'Inner',
      children : [
        new Header({
          data : this.state.data,
          open : this.state.open,
          toggleNav : this.toggleNav,
          closeNave : this.closeNav,
        }),
        /^\/[а-яё\w]+\/[а-яё\w]+$/i.test(path)?
          new SlideShow({ path }) :
          api.config.sections.find(section => section.path === path)?
            new AlbumGroup({ path, key : path }) :
            /^\/Проектирование\/?$/.test(path)?
              new Main(new FileList) :
              /^\/Блог\/?$/.test(path)?
                new Blog({ key : 'blog' }) :
                /^\/Контакты\/?$/.test(path)?
                  new Main(new Contacts) :
                  /^\/(?:index\.html)?$/.test(path)?
                    new SlideShow({ path : '/', auto : true }) :
                    new ErrorPage,
        new HtmlDiv({
          className : 'Backdrop',
          onclick : this.closeNav,
        }),
      ],
    })
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
}

export class Main extends HtmlMain
{
}
