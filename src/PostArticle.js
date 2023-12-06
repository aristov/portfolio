import { DateTime } from 'luxon'
import { HtmlArticle, HtmlH3, HtmlImg, HtmlP, HtmlTime } from 'htmlmodule'
import './PostArticle.css'

const URL_RE = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z\d.-]+)((?:\/[+~%/.\w\-_]*)?\??([-+=&;%@.\w_]*)#?([.!/\\\w]*))?)/g

export class PostArticle extends HtmlArticle
{
  static class = 'PostArticle'

  static #replaceUrls(str) {
    return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
  }

  render() {
    const item = this.props.item
    const [title, ...blocks] = item.text.split('\n\n')
    const dateTime = DateTime.fromSeconds(item.date)
    const dateString = dateTime.toLocaleString(DateTime.DATE_FULL)
    return [
      new HtmlTime(dateString),
      new HtmlH3({
        innerHTML : PostArticle.#replaceUrls(title),
      }),
      !!blocks.length && blocks.map(
        p => new HtmlP({
          innerHTML : PostArticle.#replaceUrls(p),
        }),
      ),
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
          alt : attachment.photo.text || title,
        })
      }),
    ]
  }
}
