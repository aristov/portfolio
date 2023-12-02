import { RoleFeed } from 'htmlmodule'
import { Post } from './Post'

export class Feed extends RoleFeed
{
  static class = 'Feed'

  render() {
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
