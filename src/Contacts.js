import { HtmlA, HtmlDiv, HtmlH2, HtmlHr } from 'htmlmodule'
import { ContactsLink } from './ContactsLink.js'
import { Content } from './Content.js'
import { Main } from './Main.js'
import api from './api.js'
import './Contacts.css'

export class Contacts extends Main
{
  static class = 'Contacts'

  render() {
    const section = this.props.section
    document.title = `${ section.title } | ${ api.params.name }`
    return new Content([
      new HtmlH2(section.title),
      new HtmlHr,
      new ContactsLink({
        href : 'mailto:' + section.email,
        icon : 'mail',
        children : section.email,
      }),
      new ContactsLink({
        href : 'tel:' + section.phone_number.replace(/\s+/g, ''),
        icon : 'phone',
        children : section.phone_number,
      }),
      new HtmlHr,
      section.links.map(
        props => new ContactsLink({
          target : '_blank',
          rel : 'noreferrer',
          href : props.url,
          icon : props.icon,
          children : props.text,
        }),
      ),
      new HtmlHr,
      new HtmlDiv({
        className : 'Author',
        children : [
          `${ api.params.author.title }: `,
          new HtmlA({
            href : 'mailto:' + api.params.author.email,
            target : '_blank',
            rel : 'noreferrer',
            children : api.params.author.name,
          }),
        ],
      }),
    ])
  }
}
