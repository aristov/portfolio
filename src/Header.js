import { HtmlA, HtmlButton, HtmlH1, HtmlHeader } from 'htmlmodule'
import { Inner } from './Inner.js'
import { Icon } from './Icon.js'
import { HeaderMenuNav } from './HeaderMenuNav.js'
import api from './api.js'
import './Header.css'

const { Hammer } = window

export class Header extends HtmlHeader
{
  static class = 'Header'

  render() {
    return [
      new Inner([
        new HtmlH1(new HtmlA({
          href : '/',
          children : api.params.name,
        })),
        new HtmlButton({
          onclick : () => {
            this.emit('nav-toggle', { bubbles : true })
          },
          children : new Icon(
            this.props.open ? 'cancel' : 'menu',
          ),
        }),
      ]),
      this._nav = new HeaderMenuNav,
    ]
  }

  mount() {
    this._hammertime = new Hammer(this._nav.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.emit('nav-close', { bubbles : true })
      }
    })
  }

  destroy() {
    this._hammertime.off('swipe')
  }
}
