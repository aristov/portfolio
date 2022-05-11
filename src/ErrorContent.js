import { Content } from './Content'
import './ErrorContent.css'

export class ErrorContent extends Content
{
  render() {
    document.title = 'Страница не найдена'
    return '404'
  }
}
