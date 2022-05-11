import {
  HtmlA, HtmlButton, HtmlDiv, HtmlH1, HtmlHeader, HtmlLi, HtmlNav, HtmlSmall, HtmlSpan, HtmlUl,
} from 'htmlmodule'
import { Icon } from './Icon'
import { Link } from './Link'
import api from './api'
import './Header.css'

const { Hammer } = window

export class Header extends HtmlHeader
{
  render() {
    return [
      new HtmlDiv({
        className : 'Inner',
        children : [
          new HtmlH1(new HtmlA({ href : '/', text : 'Лариса Дедловская' })),
          new HtmlButton({
            className : 'MenuButton',
            onclick : this.props.toggleNav,
            children : new HtmlSpan({
              className : this.props.open? 'icon icon-cancel' : 'icon icon-menu',
            }),
          }),
        ],
      }),
      this._nav = new HtmlNav([
        new HtmlUl({
          attrs : { role : 'menu' },
          onclick : this.props.closeNav,
          children : [
            api.config.sections.map(section => new HtmlLi({
              attrs : { role : 'menuitem' },
              children : new Link({
                text : section.title,
                href : section.path,
                onkeydown : this.onKeyDown,
              }),
            })),
            new HtmlLi({
              attrs : { role : 'menuitem' },
              children : new Link({
                href : '/Проектирование',
                text : 'Проектирование',
                onkeydown : this.onKeyDown,
              }),
            }),
            new HtmlLi({
              attrs : { role : 'menuitem' },
              children : new Link({
                href : '/Блог',
                text : 'Блог',
                onkeydown : this.onKeyDown,
              }),
            }),
            new HtmlLi({
              attrs : { role : 'menuitem' },
              children : new Link({
                href : '/Контакты',
                text : 'Контакты',
                onkeydown : this.onKeyDown,
              }),
            }),
          ],
        }),
        new Social,
        new HtmlSmall(`© ${ (new Date()).getFullYear() } Лариса Дедловская`),
      ]),
    ]
  }

  componentDidMount() {
    this._hammertime = new Hammer(this._nav.node)
    this._hammertime.on('swipe', e => {
      e.direction === Hammer.DIRECTION_RIGHT && this.props.closeNav()
    })
  }

  componentWillUnmount() {
    this._hammertime.off('swipe')
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
    if(e.code === 'ArrowUp') {
      e.target.parentElement.previousElementSibling?.querySelector('a').focus()
    }
    if(e.code === 'ArrowDown') {
      e.target.parentElement.nextElementSibling?.querySelector('a').focus()
    }
  }
}

class Social extends HtmlDiv
{
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

