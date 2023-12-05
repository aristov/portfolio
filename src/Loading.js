import { HtmlDiv } from 'htmlmodule'
import api from './api.js'

export class Loading extends HtmlDiv
{
  static class = 'Loading'

  render() {
    return api.params.loading || 'Loading...'
  }
}
