import params from './params.js'

const api = {
  params,
  cache : {
    '/' : {
      owner_id : params.owner_id,
      id : params.album_id,
    },
  },
  normalize(name) {
    return name.replace(/[\s():,./]+/g, '_')
  },
  createUrl(method, params) {
    const url = new URL(method, location.origin)
    return Object.assign(url, {
      search : new URLSearchParams(params),
    })
  },
  async callMethod(method, params) {
    const url = api.createUrl(method, params)
    const res = await fetch(url.href)
    return res.json()
  },
  async getAlbumsGroup(path) {
    const section = this.cache[path]
    if(!section) {
      throw Error(params.not_found)
    }
    if(section.items) {
      return section
    }
    const { items } = await api.callMethod('photos.getAlbums', {
      owner_id : section.owner_id,
    })
    section.items = items
    for(const album of items) {
      album.section = section
      this.cache[album.path = path + '/' + api.normalize(album.title)] = album
    }
    return section
  },
  async getAlbum(path) {
    let album = this.cache[path]
    if(!album) {
      await this.getAlbumsGroup('/' + path.slice(1).split('/')[0])
      album = this.cache[path]
    }
    if(!album) {
      throw Error(params.not_found)
    }
    if(album.items) {
      return album
    }
    const { items } = await api.callMethod('photos.get', {
      owner_id : album.owner_id,
      album_id : album.id,
    })
    album.items = items
    return album
  },
  async getArticles(offset) {
    return api.callMethod('wall.get', {
      owner_id : params.owner_id,
      offset : offset,
    })
  },
}

for(const section of params.sections) {
  section.path = '/' + api.normalize(section.title)
  api.cache[section.path] = section
}

export default api
