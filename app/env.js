import dotenv from 'dotenv'

let loaded = false

if(!loaded) {
  const url = new URL('../.env', import.meta.url)
  dotenv.config({
    path : url.pathname,
  })
  loaded = true
}

export default process.env
