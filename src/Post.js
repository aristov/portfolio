import { HtmlArticle, HtmlH3, HtmlImg, HtmlP, HtmlTime } from 'htmlmodule'

const { moment } = window

export class Post extends HtmlArticle
{
  render() {
    const item = this.props.item
    const [title, ...text] = item.text.split('\n\n')
    return [
      new HtmlTime(moment.unix(item.date).format('D MMM YYYY')),
      new HtmlH3({ html : replace(title) }),
      !!text.length && text.map(p => new HtmlP({ html : replace(p) })),
      item.attachments?.map(attachment => {
        if(attachment.type === 'photo') {
          return new HtmlImg({
            key : attachment.photo.id,
            src : attachment.photo.sizes.find(size => size.type === 'r')?.url,
            alt : '',
          })
        }
        return null
      }),
    ]
  }
}

const URL_RE = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/g

function replace(str) {
  return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
}
