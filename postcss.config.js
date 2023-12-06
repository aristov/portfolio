import './app/env.js'
import autoprefixer from 'autoprefixer'
import csso from 'postcss-csso'

const plugins = [autoprefixer]

if(process.env.NODE_ENV === 'production') {
  plugins.push(csso())
}

export { plugins }
