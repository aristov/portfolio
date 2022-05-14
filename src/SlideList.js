import { HtmlDiv } from '../../htmlmodule'
import { SlideItem } from './SlideItem'

export class SlideList extends HtmlDiv
{
  render() {
    return this.props.items.map((item, i) => new SlideItem({
      item,
      index : i,
      key : item.id,
    }))
  }
}
