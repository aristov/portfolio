import { HtmlDiv, HtmlArticle, HtmlTime, HtmlP, HtmlH3, HtmlImg } from 'htmlmodule'
import { Loading } from './Loading'
import api from './api'
import './Blog.css'

const { moment } = window

export class Blog extends HtmlDiv
{
  state = {
    data : [],
    busy : false,
  }

  componentDidMount() {
    void this.load()
  }

  async load() {
    if(this.state.busy) {
      return
    }
    const data = this.state.data
    this.setState({ busy : true })
    const { count, items } = await api.getBlog(data.length)
    this._count = count
    this.setState({ data : [...data, ...items], busy : false })
  }

  onScroll = () => {
    if(this.state.data.length >= this._count) {
      return
    }
    const node = this.node
    if(node.scrollTop > node.scrollHeight - node.clientHeight * 2) {
      void this.load()
    }
  }

  render() {
    this.setAttr('role', 'feed')
    this.setAttr('aria-busy', this.state.busy)
    this.onscroll = this.onScroll
    return [
      this.state.data.map(item => {
        if(!item.text && !item.attachments) {
          return null
        }
        if(item.copy_history) {
          return null
        }
        return new Post({ key : item.id, item })
      }),
      this.state.busy && new Loading,
    ]
  }
}

class Post extends HtmlArticle
{
  render() {
    const item = this.props.item
    const [title, ...text] = item.text.split('\n\n')
    return [
      new HtmlTime(moment.unix(item.date).format('D MMM YYYY')),
      new HtmlH3({ html : linkInsert(title) }),
      !!text.length && text.map(p => new HtmlP({ html : linkInsert(p) })),
      item.attachments?.map(attachment => {
        if(attachment.type === 'photo') {
          return new HtmlImg({
            key : attachment.photo.id,
            src : attachment.photo.sizes.find(size => size.type === 'r')?.url,
            alt : '',
          })
        }
        return null
      }),
    ]
  }
}

const URL_RE = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/g

function linkInsert(str) {
  return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
}
