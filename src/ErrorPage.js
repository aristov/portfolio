import { HtmlDiv, HtmlMain } from 'htmlmodule'

export class ErrorPage extends HtmlMain
{
  render() {
    document.title = 'Страница не найдена'
    this.className = 'Main'
    return new HtmlDiv({
      className : 'Error',
      text : '404',
    })
  }
}
