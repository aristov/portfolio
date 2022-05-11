import './index.css'
import { App } from './App'

const render = app => {
  app?.destroy()
  return App.render({}, document.getElementById('root'))
}

let app = render()

module.hot?.accept(['./App'], () => app = render(app))
