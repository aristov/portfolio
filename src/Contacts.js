import { HtmlA, HtmlDiv, HtmlH2, HtmlHr } from 'htmlmodule'
import { ContactsLink } from './ContactsLink'
import { Content } from './Content'
import { Main } from './Main'
import './Contacts.css'

export class Contacts extends Main
{
  render() {
    document.title = 'Контакты | Лариса Дедловская'
    return new Content([
      new HtmlH2('Контакты'),
      new HtmlHr,
      new ContactsLink({
        href : 'mailto:lddesign@mail.ru',
        icon : 'mail',
        children : 'lddesign@mail.ru',
      }),
      new ContactsLink({
        href : 'tel:+79257711473',
        icon : 'phone',
        children : '+7 925 771 1473',
      }),
      new HtmlHr,
      new ContactsLink({
        href : 'https://instagram.com/design.ld',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'instagram',
        children : 'design.ld',
      }),
      new ContactsLink({
        href : 'https://facebook.com/larisa.dedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'facebook',
        children : 'larisa.dedlovskaya',
      }),
      new ContactsLink({
        href : 'https://vk.com/larisadedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'vkontakte',
        children : 'larisadedlovskaya',
      }),
      new ContactsLink({
        href : 'https://mona.livejournal.com',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'livejournal',
        children : 'mona',
      }),
      new HtmlHr,
      new HtmlDiv({
        className : 'Author',
        children : [
          'Разработчик сайта: ',
          new HtmlA({
            href : 'mailto:vv.aristov@gmail.com',
            target : '_blank',
            rel : 'noreferrer',
            text : 'Вячеслав Аристов',
          }),
        ]
      }),
    ])
  }
}
