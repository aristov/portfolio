import { HtmlDiv } from 'htmlmodule'
import { Heading } from './Heading.js'
import { AlbumCardLink } from './AlbumCardLink.js'
import { ErrorContent } from './ErrorContent.js'
import { Inner } from './Inner.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import api from './api.js'
import './AlbumsMain.css'

export class AlbumsMain extends Main
{
  static class = 'AlbumsMain'

  state = {
    group : null,
    error : null,
    busy : false,
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const { group, error } = this.state
    if(error) {
      return new ErrorContent({ error })
    }
    if(!group) {
      return new Loading
    }
    document.title = `${ group.title } | ${ api.params.name }`
    return new Inner({
      classList : ['appear'],
      children : [
        new HtmlDiv({
          className : 'AlbumCardLink',
          children : new Heading(group.title),
        }),
        group.items.map(
          album => new AlbumCardLink({
            key : album.id,
            album,
          }),
        ),
      ],
    })
  }

  mount() {
    void this.#load()
  }

  update(prevProps, prevState) {
    if(this.props.section.path !== prevProps.section.path) {
      void this.#load()
    }
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        group : await api.getAlbumsGroup(this.props.section.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }
}
