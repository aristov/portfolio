import { HtmlDiv } from 'htmlmodule'

export class SlideItem extends HtmlDiv
{
  render() {
    const url = this.props.item.sizes.find(size => size.type === 'z').url
    const style = {
      backgroundImage : `url(${ url })`,
      left : (this.props.index - 1) * 100 + '%',
    }
    if(location.hostname !== 'new.lddesign.ru') {
      style.backgroundSize = 'cover'
    }
    this.setAttr('role', 'img')
    this.style = style
  }
}
