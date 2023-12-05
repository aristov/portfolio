import { HtmlA, HtmlH2, HtmlHr } from 'htmlmodule'
import { Content } from './Content.js'
import { Main } from './Main.js'
import { Icon } from './Icon.js'
import api from './api.js'
import './DocumentList.css'

export class DocumentList extends Main
{
  static class = 'DocumentList'

  render() {
    const section = this.props.section
    document.title = `${ section.title } | ${ api.params.name }`
    return new Content([
      new HtmlH2(section.title),
      new HtmlHr,
      section.docs.map(item => new HtmlA({
        key : item.path,
        href : item.path,
        target : '_blank',
        rel : 'noreferrer',
        children : [
          new Icon('file-pdf'),
          item.title,
        ],
      })),
    ])
  }
}
