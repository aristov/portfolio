import { RoleImg } from 'htmlmodule'

export class SlideItem extends RoleImg
{
  static class = 'SlideItem'

  assign() {
    super.assign()
    const size = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const url = size.url
    const style = {
      backgroundImage : `url(${ url })`,
      left : (this.props.index - 1) * 100 + '%',
    }
    if(location.hostname === 'new.lddesign.ru') {
      style.backgroundSize = 'cover'
    }
    this.style = style
  }
}
