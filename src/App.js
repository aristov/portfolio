import { HtmlDiv } from 'htmlmodule'
import { AppContent } from './AppContent.js'
import './App.css'

export class App extends HtmlDiv
{
  static class = 'App'

  static #getPath() {
    const pathname = decodeURIComponent(location.pathname)
    const key = pathname.replace(/\/$/, '')
    return key || '/'
  }

  state = {
    path : App.#getPath(),
  }

  init() {
    window.addEventListener('popstate', this.#onPopState)
    document.addEventListener('click', this.#onDocClick)
  }

  destroy() {
    window.removeEventListener('popstate', this.#onPopState)
    document.removeEventListener('click', this.#onDocClick)
  }

  render() {
    const path = this.state.path
    this.classList = [
      path === '/' && 'homepage',
    ]
    return new AppContent({ path })
  }

  #onPopState = () => {
    this.setState({
      path : App.#getPath(),
    })
  }

  #onDocClick = e => {
    if(!e.target.closest('.Link')) {
      return
    }
    this.setState({
      path : App.#getPath(),
    })
  }
}
