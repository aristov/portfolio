import { HtmlA } from 'htmlmodule'

export class Link extends HtmlA
{
  init(deep) {
    super.init(deep)
    this.onclick = this.onClick
    if(decodeURIComponent(location.pathname) !== this.props.to) {
      this.href = this.props.to
    }
  }

  onClick = e => {
    if(this.pathname) {
      e.preventDefault()
      history.pushState(null, '', this.pathname)
    }
  }
}
