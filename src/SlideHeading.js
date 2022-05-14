import { HtmlH2, HtmlA } from '../../htmlmodule'

export class SlideHeading extends HtmlH2
{
  render() {
    return [
      new HtmlA({
        href : this.props.section.path,
        text : this.props.section.title,
        onkeydown : this.onBackKeyDown,
      }),
      ' → ' + this.props.album.title,
    ]
  }

  onBackKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}
