import { HtmlDiv, HtmlH2, HtmlHr, HtmlA } from 'htmlmodule'
import { Icon } from './Icon'
import api from './api'
import './FileList.css'

export class FileList extends HtmlDiv
{
  render() {
    document.title = 'Проектирование | Лариса Дедловская'
    return [
      new HtmlH2('Проектирование'),
      new HtmlHr,
      api.config.docs.map(item => new FileLink({ key : item.path, item })),
    ]
  }
}

export class FileLink extends HtmlA
{
  render() {
    this.href = this.props.item.path
    this.target = '_blank'
    this.rel = 'noreferrer'
    return [
      new Icon('file-pdf'),
      this.props.item.title,
    ]
  }
}
