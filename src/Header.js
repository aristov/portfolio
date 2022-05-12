import {
  HtmlA, HtmlButton, HtmlH1, HtmlHeader, HtmlLi, HtmlNav, HtmlSmall, HtmlSpan, HtmlUl,
} from 'htmlmodule'
import { Inner } from './Inner'
import { Link } from './Link'
import { Social } from './Social'
import { Icon } from './Icon'
import api from './api'
import './Header.css'

const { Hammer } = window

export class Header extends HtmlHeader
{
  render() {
    return [
      new Inner([
        new HtmlH1(new HtmlA({ href : '/', text : 'Лариса Дедловская' })),
        new HtmlButton({
          className : 'MenuButton',
          onclick : this.props.toggleNav,
          children : new Icon(this.props.open ? 'cancel' : 'menu'),
        }),
      ]),
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
