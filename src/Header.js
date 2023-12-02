import {
  HtmlA, HtmlButton, HtmlH1, HtmlHeader, HtmlLi, HtmlNav, HtmlSmall, HtmlUl,
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
  static class = 'Header'

  render() {
    const year = (new Date).getFullYear()
    return [
      new Inner([
        new HtmlH1(new HtmlA({
          href : '/',
          children : 'Лариса Дедловская',
        })),
        new HtmlButton({
          className : 'MenuButton',
          onclick : this.props.toggleNav,
          children : new Icon(this.props.open ? 'cancel' : 'menu'),
        }),
      ]),
      this._nav = new HtmlNav([
        new HtmlUl({
          role : 'menu',
          onclick : this.props.closeNav,
          children : [
            api.config.sections.map(section => new HtmlLi({
              role : 'menuitem',
              children : new Link({
                to : section.path,
                children : section.title,
                onkeydown : this.onKeyDown,
              }),
            })),
            new HtmlLi({
              role : 'menuitem',
              children : new Link({
                to : '/Проектирование',
                children : 'Проектирование',
                onkeydown : this.onKeyDown,
              }),
            }),
            new HtmlLi({
              role : 'menuitem',
              children : new Link({
                to : '/Блог',
                children : 'Блог',
                onkeydown : this.onKeyDown,
              }),
            }),
            new HtmlLi({
              role : 'menuitem',
              children : new Link({
                to : '/Контакты',
                children : 'Контакты',
                onkeydown : this.onKeyDown,
              }),
            }),
          ],
        }),
        new Social,
        new HtmlSmall(`© ${ year } Лариса Дедловская`),
      ]),
    ]
  }

  mount() {
    this._hammertime = new Hammer(this._nav.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.props.closeNav()
      }
    })
  }

  destroy() {
    this._hammertime.off('swipe')
  }

  onKeyDown = e => {
    const target = e.nativeEvent.target
    if(e.code === 'Space') {
      e.stopPropagation()
      target.click()
    }
    if(e.code === 'ArrowUp') {
      target.parentElement.previousElementSibling?.querySelector('a').focus()
    }
    if(e.code === 'ArrowDown') {
      target.parentElement.nextElementSibling?.querySelector('a').focus()
    }
  }
}
