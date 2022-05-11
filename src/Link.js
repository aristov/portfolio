import { HtmlA } from 'htmlmodule'

export class Link extends HtmlA
{
  render() {
    this.onclick = this.onClick
    return super.render()
  }

  onClick = e => {
    e.preventDefault()
    history.pushState(null, '', this.pathname)
  }
}
