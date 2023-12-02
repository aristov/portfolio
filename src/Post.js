import { HtmlArticle, HtmlH3, HtmlImg, HtmlP, HtmlTime } from 'htmlmodule'

const { moment } = window
const URL_RE = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z\d.-]+)((?:\/[+~%/.\w\-_]*)?\??([-+=&;%@.\w_]*)#?([.!/\\\w]*))?)/g

function replace(str) {
  return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
}

export class Post extends HtmlArticle
{
  static class = 'Post'

  render() {
    const item = this.props.item
    const [title, ...blocks] = item.text.split('\n\n')
    const date = moment.unix(item.date)
    return [
      new HtmlTime(date.format('D MMM YYYY')),
      new HtmlH3({
        innerHTML : replace(title),
      }),
      !!blocks.length && blocks.map(p => new HtmlP({
        innerHTML : replace(p),
      })),
      item.attachments?.map(attachment => {
        if(attachment.type !== 'photo') {
          return null
        }
        const size = attachment.photo.sizes.find(
          size => size.type === 'r',
        )
        return new HtmlImg({
          key : attachment.photo.id,
          src : size?.url,
          alt : '',
        })
      }),
    ]
  }
}
