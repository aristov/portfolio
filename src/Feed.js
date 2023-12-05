import { RoleFeed } from 'htmlmodule'
import { PostArticle } from './PostArticle.js'

export class Feed extends RoleFeed
{
  static class = 'Feed'

  render() {
    return this.props.data.map(item => {
      if(!item.text && !item.attachments) {
        return null
      }
      if(item.copy_history) {
        return null
      }
      return new PostArticle({ key : item.id, item })
    })
  }
}
