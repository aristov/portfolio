import { RoleImg } from 'htmlmodule'
import params from './params.js'
import './PhotoImg.css'

export class PhotoImg extends RoleImg
{
  static class = 'PhotoImg'

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

  setX(x) {
    const index = this.props.index - 1
    const percent = index * 100
    this.style.left = `calc(${ percent }% + ${ x }px)`
  }
}
