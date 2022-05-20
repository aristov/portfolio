import { HtmlH2 } from 'htmlmodule'
import { Link } from './Link'

export class SlideHeading extends HtmlH2
{
  render() {
    return [
      new Link({
        to : this.props.section.path,
        text : this.props.section.title,
        onkeydown : this.onKeyDown,
      }),
      ' → ' + this.props.album.title,
    ]
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}
