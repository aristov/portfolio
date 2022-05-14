import { HtmlDiv } from '../../htmlmodule'
import { Icon } from './Icon'

export class SlideControl extends HtmlDiv
{
  render() {
    return [
      new SlidePrev({
        onclick : () => this.props.switchSlide(-1, true),
        onkeydown : this.onButtonKeyDown,
        title : 'Предыдущий слайд',
        children : new Icon('angle-left'),
      }),
      new SlideCounter([this.props.current + 1, ' / ', this.props.album.items.length]),
      new SlideNext({
        onclick : () => this.props.switchSlide(1, true),
        onkeydown : this.onButtonKeyDown,
        title : 'Следующий слайд',
        children : new Icon('angle-right'),
      }),
    ]
  }

  onButtonKeyDown = e => {
    e.code === 'Space' && e.stopPropagation()
  }
}

class SlidePrev extends HtmlDiv
{
}

class SlideCounter extends HtmlDiv
{
}

class SlideNext extends HtmlDiv
{
}
