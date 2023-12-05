import { RoleImg } from 'htmlmodule'
import params from './params.js'

export class SlideItem extends RoleImg
{
  static class = 'SlideItem'

  assign() {
    super.assign()
    const size = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const url = size.url
    const index = this.props.index - 1
    this.style = {
      left : index * 100 + '%',
      backgroundImage : `url(${ url })`,
      backgroundSize : params.background_size,
    }
  }
}
