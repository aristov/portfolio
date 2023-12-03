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
    document.title = 'Проектирование | Лариса Дедловская'
    return new Content([
      new HtmlH2('Проектирование'),
      new HtmlHr,
      api.config.docs.map(item => new HtmlA({
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
