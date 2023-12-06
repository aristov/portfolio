import { HtmlA } from 'htmlmodule'
import { Icon } from './Icon.js'
import './ContactsLink.css'

export class ContactsLink extends HtmlA
{
  static class = 'ContactsLink'

  render() {
    return [
      new Icon(this.props.icon),
      this.props.children,
    ]
  }
}
