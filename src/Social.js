import { HtmlA, HtmlDiv } from 'htmlmodule'
import { Icon } from './Icon'

export class Social extends HtmlDiv
{
  static class = 'Social'

  render() {
    return new HtmlDiv([
      new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://instagram.com/design.ld',
        children : new Icon('instagram'),
      }),
      new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://facebook.com/larisa.dedlovskaya',
        children : new Icon('facebook'),
      }),
      new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://mona.livejournal.com',
        children : new Icon('livejournal'),
      }),
      new HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://vk.com/larisadedlovskaya',
        children : new Icon('vkontakte'),
      }),
    ])
  }
}
