import './index.css'
import { Settings } from 'luxon'
import { ElemType } from 'htmlmodule'
import { App } from './App.js'

Settings.defaultLocale = document.documentElement.lang
ElemType.setDebugMode(process.env.NODE_ENV === 'development')

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
