import params from './params.js'

const API_HOST_URL = process.env.API_HOST_URL

function normalize(name) {
  return name.replace(/[\s():,./]+/g, '_')
}

const api = {
  params,
  cache : {
    '/' : {
      owner_id : params.owner_id,
      id : params.album_id,
    },
  },
  async getSection(path) {
    const section = this.cache[path]
    if(!section) {
      throw Error(params.not_found)
    }
    if(section.items) {
      return section
    }
    const url = new URL('albums.php', API_HOST_URL)
    url.searchParams.set('owner_id', section.owner_id)
    const res = await fetch(url.href)
    const { items } = await res.json()
    section.items = items
    for(const album of items) {
      album.section = section
      this.cache[album.path = path + '/' + normalize(album.title)] = album
    }
    return section
  },
  async getAlbum(path) {
    let album = this.cache[path]
    if(!album) {
      await this.getSection('/' + path.slice(1).split('/')[0])
      album = this.cache[path]
    }
    if(!album) {
      throw Error(params.not_found)
    }
    if(album.items) {
      return album
    }
    const url = new URL('album.php', API_HOST_URL)
    url.searchParams.set('owner_id', album.owner_id)
    url.searchParams.set('album_id', album.id)
    const res = await fetch(url.href)
    const { items } = await res.json()
    album.items = items
    return album
  },
  async getBlog(offset) {
    const url = new URL('blog.php', API_HOST_URL)
    url.searchParams.set('owner_id', params.owner_id)
    url.searchParams.set('offset', offset)
    const res = await fetch(url.href)
    return res.json()
  },
}

for(const section of params.sections) {
  const title = '/' + normalize(section.title)
  api.cache[section.path = title] = section
}

export default api
