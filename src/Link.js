import { HtmlA } from 'htmlmodule'

export class Link extends HtmlA
{
  init(deep) {
    super.init(deep)
    this.onclick = this.onClick
  }

  onClick = e => {
    e.preventDefault()
    history.pushState(null, '', this.pathname)
  }
}
