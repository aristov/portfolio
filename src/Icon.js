import { HtmlSpan } from 'htmlmodule'

export class Icon extends HtmlSpan
{
  static class = 'Icon'

  constructor(props) {
    super(
      typeof props === 'string' ?
        { glyph : props } :
        props,
    )
  }

  assign() {
    super.assign()
    this.classList = 'icon icon-' + this.props.glyph
  }
}
