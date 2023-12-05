import './index.css'
import { App } from './App.js'

// noinspection JSUnresolvedVariable
const hot = import.meta.webpackHot
const render = app => {
  App.destroy(app)
  return App.render({}, document.body)
}

let app = render()

if(hot) {
  document.getElementById('css')?.remove()
  // noinspection JSUnresolvedVariable
  hot.accept(['./App'], () => app = render(app))
}
