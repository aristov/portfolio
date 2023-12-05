import { HtmlA, HtmlHr } from 'htmlmodule'
import { Main } from './Main.js'
import { Content } from './Content.js'
import { Heading } from './Heading.js'
import { Icon } from './Icon.js'
import api from './api.js'
import './DocumentsMain.css'

export class DocumentsMain extends Main
{
  static class = 'DocumentsMain'

  render() {
    const section = this.props.section
    document.title = `${ section.title } | ${ api.params.name }`
    return new Content([
      new Heading(section.title),
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
