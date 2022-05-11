import { HtmlA } from 'htmlmodule'
import { Icon } from './Icon'

export class ContactsLink extends HtmlA
{
  render() {
    return [
      new Icon(this.props.icon),
      this.props.children,
    ]
  }
}
