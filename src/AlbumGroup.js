import { HtmlDiv, HtmlH2 } from 'htmlmodule'
import { AlbumItem } from './AlbumItem.js'
import { ErrorContent } from './ErrorContent.js'
import { Inner } from './Inner.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import api from './api.js'
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
    document.title = `${ group.title } | ${ api.params.name }`
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
    if(this.props.section.path !== prevProps.section.path) {
      void this.#load()
    }
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        group : await api.getSection(this.props.section.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }
}
