import { HtmlDiv } from 'htmlmodule'
import { SlideItem } from './SlideItem.js'

export class SlideList extends HtmlDiv
{
  static class = 'SlideList'

  render() {
    return this.props.items.map(
      (item, i) => new SlideItem({
        key : item.id,
        index : i,
        item,
      }),
    )
  }
}
