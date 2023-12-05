import { HtmlDiv, HtmlButton } from 'htmlmodule'
import { Icon } from './Icon.js'
import api from './api.js'
import './AlbumNavBlock.css'

export class AlbumNavBlock extends HtmlDiv
{
  static class = 'AlbumNavBlock'

  render() {
    return [
      new PrevButton({
        title : api.params.prev_slide || 'Previous slide',
        onkeydown : this.onKeyDown,
        onclick : () => this.props.switchSlide(-1, true),
        children : new Icon('angle-left'),
      }),
      new AlbumNavCounter([
        this.props.current + 1,
        ' / ',
        this.props.album.items.length,
      ]),
      new NextButton({
        title : api.params.next_slide || 'Next slide',
        onkeydown : this.onKeyDown,
        onclick : () => this.props.switchSlide(1, true),
        children : new Icon('angle-right'),
      }),
    ]
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
    }
  }
}

class PrevButton extends HtmlButton
{
  static class = 'PrevButton'
}

class AlbumNavCounter extends HtmlDiv
{
  static class = 'AlbumNavCounter'
}

class NextButton extends HtmlButton
{
  static class = 'NextButton'
}
