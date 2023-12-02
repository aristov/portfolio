import { HtmlDiv, HtmlH2 } from 'htmlmodule'
import { AlbumItem } from './AlbumItem'
import { ErrorContent } from './ErrorContent'
import { Inner } from './Inner'
import { Loading } from './Loading'
import { Main } from './Main'
import api from './api'
import './AlbumGroup.css'

export class AlbumGroup extends Main
{
  static class = 'AlbumGroup'

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
    const group = this.state.group
    if(this.state.error) {
      return new ErrorContent
    }
    if(!group) {
      return new Loading
    }
    document.title = group.title + ' | Лариса Дедловская'
    return new Inner({
      classList : ['appear'],
      children : [
        new HtmlDiv({
          className : 'AlbumItem',
          children : new HtmlH2(group.title),
        }),
        group.items.map(
          album => new AlbumItem({
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
    if(this.props.path !== prevProps.path) {
      void this.#load()
    }
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        group : await api.getSection(this.props.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }
}
