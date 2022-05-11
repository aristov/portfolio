import { HtmlSpan } from 'htmlmodule'

export class Icon extends HtmlSpan
{
  render() {
    this.className = 'icon icon-' + this.props.children
  }
}
