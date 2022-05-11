import { HtmlDiv, HtmlA, HtmlHr, HtmlH2 } from 'htmlmodule'
import { Icon } from './Icon'
import './Contacts.css'

export class Contacts extends HtmlDiv
{
  render() {
    document.title = 'Контакты | Лариса Дедловская'
    return [
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
      new Author([
        'Разработчик сайта: ',
        new HtmlA({
          href : 'mailto:vv.aristov@gmail.com',
          target : '_blank',
          rel : 'noreferrer',
          text : 'Вячеслав Аристов',
        }),
      ]),
    ]
  }
}

class ContactsLink extends HtmlA
{
  render() {
    return [
      new Icon(this.props.icon),
      this.props.children,
    ]
  }
}

class Author extends HtmlDiv
{
}
