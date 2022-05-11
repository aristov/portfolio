import { HtmlH2, HtmlHr } from 'htmlmodule'
import { Content } from './Content'
import { FileLink } from './FileLink'
import { Main } from './Main'
import api from './api'
import './FileList.css'

export class FileList extends Main
{
  render() {
    document.title = 'Проектирование | Лариса Дедловская'
    return new Content([
      new HtmlH2('Проектирование'),
      new HtmlHr,
      api.config.docs.map(item => new FileLink({ key : item.path, item })),
    ])
  }
}
