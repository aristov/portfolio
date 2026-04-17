import { Content } from './Content.js'
import './ErrorContent.css'

export class ErrorContent extends Content
{
  static class = 'ErrorContent'

  render() {
    const error = this.props.error
    document.title = error.name
    console.error(error)
    return error.message
  }
}
