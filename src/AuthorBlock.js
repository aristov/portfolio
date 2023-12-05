import { HtmlDiv, HtmlA } from 'htmlmodule'
import api from './api.js'
import './AuthorBlock.css'

const author = api.params.author

export class AuthorBlock extends HtmlDiv
{
  static class = 'AuthorBlock'

  render() {
    return [
      `${ author.title }: `,
      new HtmlA({
        href : 'mailto:' + author.email,
        target : '_blank',
        rel : 'noreferrer',
        children : author.name,
      }),
    ]
  }
}
