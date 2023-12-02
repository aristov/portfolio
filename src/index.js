import './index.css'
import { App } from './App'

const render = app => {
  App.destroy(app)
  return App.render({}, document.getElementById('root'))
}

let app = render()

if(module.hot) {
  document.getElementById('css')?.remove()
  module.hot.accept(['./App'], () => app = render(app))
}
