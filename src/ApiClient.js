import { ApiError } from './ApiError.js'

export class ApiClient
{
  constructor(params) {
    this.params = params
    this.cache = {
      '/' : {
        owner_id : params.owner_id,
        id : params.album_id,
      },
    }
    for(const section of params.sections) {
      section.path = '/' + ApiClient.normalize(section.title)
      this.cache[section.path] = section
    }
  }

  static normalize(name) {
    return name.replace(/[\s():,./]+/g, '_')
  }

  static createUrl(method, params) {
    const url = new URL(method, location.origin)
    return Object.assign(url, {
      search : new URLSearchParams(params),
    })
  }

  async callMethod(method, params) {
    const url = ApiClient.createUrl(method, params)
    const res = await fetch(url.href, {
      headers : {
        'Accept' : 'application/json',
      },
    })
    if(res.ok) {
      return res.json()
    }
    const data = await res.json()
    const error = new ApiError(data.message)
    throw Object.assign(error, data)
  }

  async getAlbumsGroup(path) {
    const section = this.cache[path]
    if(!section) {
      throw Error(this.params.not_found)
    }
    if(section.items) {
      return section
    }
    const { items } = await this.callMethod('photos.getAlbums', {
      owner_id : section.owner_id,
    })
    section.items = items
    let album, name
    for(album of items) {
      name = ApiClient.normalize(album.title)
      album.path = path + '/' + name
      album.section = section
      this.cache[album.path] = album
    }
    return section
  }

  async getAlbum(path) {
    let album = this.cache[path]
    if(!album) {
      const [name] = path.slice(1).split('/')
      await this.getAlbumsGroup('/' + name)
      album = this.cache[path]
    }
    if(!album) {
      throw Error(this.params.not_found)
    }
    if(album.items) {
      return album
    }
    const { items } = await this.callMethod('photos.get', {
      owner_id : album.owner_id,
      album_id : album.id,
    })
    album.items = items
    return album
  }

  async getArticles(offset) {
    return this.callMethod('wall.get', {
      owner_id : this.params.owner_id,
      offset : offset,
    })
  }
}
