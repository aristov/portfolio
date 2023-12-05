import fs from 'node:fs'

const url = new URL('../config.json', import.meta.url)
const content = fs.readFileSync(url.pathname, 'utf-8')
const config = JSON.parse(content)

export default config
