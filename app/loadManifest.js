import fs from 'node:fs/promises'

const url = new URL('../public/static/manifest.json', import.meta.url)
let manifest

export async function loadManifest() {
  const json = await fs.readFile(url.pathname, 'utf-8')
  return manifest ||= JSON.parse(json)
}
