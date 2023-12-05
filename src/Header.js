import {
  HtmlA, HtmlButton, HtmlH1, HtmlHeader, HtmlLi, HtmlNav, HtmlSmall, HtmlUl,
} from 'htmlmodule'
import { Inner } from './Inner.js'
import { Link } from './Link.js'
import { Social } from './Social.js'
import { Icon } from './Icon.js'
import api from './api.js'
import './Header.css'

const { Hammer } = window

export class Header extends HtmlHeader
{
  static class = 'Header'

  render() {
    const year = (new Date).getFullYear()
    const contacts = api.params.sections.find(
      section => section.type === 'contacts',
    )
    return [
      new Inner([
        new HtmlH1(new HtmlA({
          href : '/',
          children : api.params.name,
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
            api.params.sections.map(section => new HtmlLi({
              role : 'menuitem',
              children : new Link({
                to : section.path,
                children : section.title,
                onkeydown : this.onKeyDown,
              }),
            })),
          ],
        }),
        new Social({
          links : contacts.links,
        }),
        new HtmlSmall(`© ${ year } ${ api.params.name }`),
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
