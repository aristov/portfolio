import { HtmlA, HtmlDiv } from 'htmlmodule'
import { Icon } from './Icon.js'
import api from './api.js'
import './SocialBlock.css'

const links = api.params.contacts.links

export class SocialBlock extends HtmlDiv
{
  static class = 'SocialBlock'

  render() {
    return new HtmlDiv(links.map(
      props => new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : props.url,
        title : props.text,
        children : new Icon(props.icon),
      }),
    ))
  }
}
