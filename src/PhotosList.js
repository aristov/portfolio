import { HtmlDiv } from 'htmlmodule'
import { PhotoImg } from './PhotoImg.js'
import './PhotosList.css'

export class PhotosList extends HtmlDiv
{
  static class = 'PhotosList'

  render() {
    return this.props.items.map(
      (item, i) => new PhotoImg({
        key : item.id,
        index : i,
        item,
      }),
    )
  }
}
