import { Feed } from './Feed'
import { Loading } from './Loading'
import { Main } from './Main'
import api from './api'
import './Blog.css'

export class Blog extends Main
{
  state = {
    data : null,
  }

  render() {
    const data = this.state.data
    if(!data) {
      return new Loading
    }
    this.onscroll = this.onScroll
    return new Feed({ data, class : ['appear'] })
  }

  componentDidMount() {
    void this.load()
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    const data = this.state.data || []
    const { count, items } = await api.getBlog(data.length)
    this._count = count
    this.setState({ data : [...data, ...items] })
    setTimeout(() => this.setAttr('aria-busy', 'false'))
  }

  onScroll = () => {
    if(this.getAttr('aria-busy') === 'true') {
      return
    }
    if(this.state.data.length >= this._count) {
      return
    }
    const node = this.node
    if(node.scrollTop > node.scrollHeight - node.clientHeight * 2) {
      void this.load()
    }
  }
}
