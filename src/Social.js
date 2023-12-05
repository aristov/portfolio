import { HtmlA, HtmlDiv } from 'htmlmodule'
import { Icon } from './Icon.js'

export class Social extends HtmlDiv
{
  static class = 'Social'

  render() {
    return new HtmlDiv([
      this.props.links.map(props => new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : props.url,
        title : props.text,
        children : new Icon(props.icon),
      })),
    ])
  }
}
