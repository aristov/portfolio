import { Content } from './Content.js'
import api from './api.js'
import './ErrorContent.css'

export class ErrorContent extends Content
{
  static class = 'ErrorContent'

  render() {
    document.title = api.params.not_found
    return '404'
  }
}
