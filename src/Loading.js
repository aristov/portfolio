import { HtmlDiv } from 'htmlmodule'

export class Loading extends HtmlDiv
{
  static class = 'Loading'

  render() {
    return 'Загрузка...'
  }
}
