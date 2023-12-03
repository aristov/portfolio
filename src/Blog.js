import { Feed } from './Feed.js'
import { Loading } from './Loading.js'
import { Main } from './Main.js'
import api from './api.js'
import './Blog.css'

export class Blog extends Main
{
  static class = 'Blog'

  state = {
    data : null,
    busy : false,
  }

  init() {
    super.init()
    this.on('scroll', this.onScroll)
  }

  render() {
    const data = this.state.data
    if(!data) {
      return new Loading
    }
    return new Feed({
      data,
      classList : ['appear'],
    })
  }

  mount() {
    void this.#load()
  }

  async #load() {
    this.setState({ busy : true })
    const data = this.state.data || []
    const { count, items } = await api.getBlog(data.length)
    this._count = count
    this.setState({
      data : [...data, ...items],
      busy : false,
    })
  }

  onScroll() {
    if(this.state.busy) {
      return
    }
    if(this.state.data.length >= this._count) {
      return
    }
    const node = this.node
    if(node.scrollTop > node.scrollHeight - node.clientHeight * 2) {
      void this.#load()
    }
  }
}
