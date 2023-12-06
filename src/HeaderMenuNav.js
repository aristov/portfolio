import { HtmlNav, HtmlUl, HtmlLi, HtmlSmall } from 'htmlmodule'
import { Link } from './Link.js'
import { SocialBlock } from './SocialBlock.js'
import api from './api.js'
import './HeaderMenuNav.css'

const year = (new Date).getFullYear()
const sections = api.params.sections

export class HeaderMenuNav extends HtmlNav
{
  static class = 'HeaderMenuNav'

  render() {
    return [
      new HtmlUl({
        role : 'menu',
        onclick : () => {
          this.emit('nav-close', { bubbles : true })
        },
        children : sections.map(section => new HtmlLi({
          role : 'menuitem',
          children : new Link({
            to : section.path,
            children : section.title,
            onkeydown : this.#onKeyDown,
          }),
        })),
      }),
      new SocialBlock,
      new HtmlSmall(
        `© ${ year } ${ api.params.name }`,
      ),
    ]
  }

  #onKeyDown = e => {
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
