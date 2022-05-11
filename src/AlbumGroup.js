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
  state = {
    group : null,
    err : null,
  }

  render() {
    const group = this.state.group
    if(this.state.err) {
      return new ErrorContent
    }
    if(!group) {
      return new Loading
    }
    document.title = group.title + ' | Лариса Дедловская'
    return new Inner({
      class : ['appear'],
      children : [
        new HtmlDiv({
          className : 'AlbumItem',
          children : new HtmlH2(group.title),
        }),
        group.items.map(album => new AlbumItem({ key : album.id, album })),
      ]
    })
  }

  componentDidMount() {
    void this.load()
  }

  componentDidUpdate(prevProps) {
    if(this.props.path !== prevProps.path) {
      void this.load()
    }
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    try {
      this.setState({ group : await api.getSection(this.props.path) })
      setTimeout(() => this.setAttr('aria-busy', 'false'))
    }
    catch(err) {
      this.setState({ err })
    }
  }
}
