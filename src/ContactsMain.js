import { HtmlHr } from 'htmlmodule'
import { Main } from './Main.js'
import { Heading } from './Heading.js'
import { ContactsLink } from './ContactsLink.js'
import { Content } from './Content.js'
import { AuthorBlock } from './AuthorBlock.js'
import api from './api.js'
import './ContactsMain.css'

export class ContactsMain extends Main
{
  static class = 'ContactsMain'

  render() {
    const section = this.props.section
    const contacts = api.params.contacts
    document.title = `${ section.title } | ${ api.params.name }`
    return new Content([
      new Heading(section.title),
      new HtmlHr,
      new ContactsLink({
        href : 'mailto:' + contacts.email,
        icon : 'mail',
        children : contacts.email,
      }),
      new ContactsLink({
        href : 'tel:' + contacts.phone_number.replace(/\s+/g, ''),
        icon : 'phone',
        children : contacts.phone_number,
      }),
      new HtmlHr,
      contacts.links.map(
        props => new ContactsLink({
          target : '_blank',
          rel : 'noreferrer',
          href : props.url,
          icon : props.icon,
          children : props.text,
        }),
      ),
      new HtmlHr,
      new AuthorBlock,
    ])
  }
}
