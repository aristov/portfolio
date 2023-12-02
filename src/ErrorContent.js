import { Content } from './Content'
import './ErrorContent.css'

export class ErrorContent extends Content
{
  static class = 'ErrorContent'

  render() {
    document.title = 'Страница не найдена'
    return '404'
  }
}
