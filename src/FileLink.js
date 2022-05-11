import { HtmlA } from 'htmlmodule'
import { Icon } from './Icon'

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
