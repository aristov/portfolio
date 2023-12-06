import { HtmlA } from 'htmlmodule'

export class Link extends HtmlA
{
  static class = 'Link'

  init() {
    super.init()
    this.on('click', this.#onClick)
  }

  assign() {
    super.assign()
    const pathname = decodeURIComponent(location.pathname)
    if(pathname !== this.props.to) {
      this.href = this.props.to
    }
  }

  #onClick(e) {
    if(!this.pathname) {
      return
    }
    e.preventDefault()
    history.pushState(null, '', this.pathname)
  }
}
