import config from './config.js'

const BASE_URL = 'http://new.lddesign.ru'

function normalize(name) {
  return name.replace(/[\s():,./]+/g, '_')
}

const api = {
  config,
  cache : {
    '/' : {
      owner_id : config.owner_id,
      id : config.album_id,
    },
  },
  async getSection(path) {
    const section = this.cache[path]
    if(!section) {
      throw Error('Страница не найдена')
    }
    if(section.items) {
      return section
    }
    const url = new URL('albums.php', BASE_URL)
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
      throw Error('Страница не найдена')
    }
    if(album.items) {
      return album
    }
    const url = new URL('album.php', BASE_URL)
    url.searchParams.set('owner_id', album.owner_id)
    url.searchParams.set('album_id', album.id)
    const res = await fetch(url.href)
    const { items } = await res.json()
    album.items = items
    return album
  },
  async getBlog(offset) {
    const url = new URL('blog.php', BASE_URL)
    url.searchParams.set('owner_id', config.owner_id)
    url.searchParams.set('offset', offset)
    const res = await fetch(url.href)
    return res.json()
  },
}

for(const section of config.sections) {
  api.cache[section.path = '/' + normalize(section.title)] = section
}

export default api
