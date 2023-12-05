import { HtmlDiv, HtmlButton } from 'htmlmodule'
import { Icon } from './Icon.js'
import api from './api.js'

export class SlideControl extends HtmlDiv
{
  static class = 'SlideControl'

  render() {
    return [
      new SlidePrev({
        title : api.params.prev_slide || 'Previous slide',
        onkeydown : this.onKeyDown,
        onclick : () => this.props.switchSlide(-1, true),
        children : new Icon('angle-left'),
      }),
      new SlideCounter([
        this.props.current + 1, ' / ',
        this.props.album.items.length,
      ]),
      new SlideNext({
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

class SlidePrev extends HtmlButton
{
  static class = 'SlidePrev'
}

class SlideCounter extends HtmlDiv
{
  static class = 'SlideCounter'
}

class SlideNext extends HtmlButton
{
  static class = 'SlideNext'
}
