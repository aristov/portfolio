import { HtmlA } from 'htmlmodule'
import { Icon } from './Icon'

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
