import { HtmlDiv } from 'htmlmodule'
import { Post } from './Post'

export class Feed extends HtmlDiv
{
  render() {
    this.setAttr('role', 'feed')
    return [
      this.props.data.map(item => {
        if(!item.text && !item.attachments) {
          return null
        }
        if(item.copy_history) {
          return null
        }
        return new Post({ key : item.id, item })
      }),
    ]
  }
}
