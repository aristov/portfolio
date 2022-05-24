import { HtmlSpan } from 'htmlmodule'

export class Icon extends HtmlSpan
{
  className = 'icon icon-' + this.props.glyph

  normalizeProps(props) {
    return typeof props === 'string' ? { glyph : props } : super.normalizeProps(props)
  }
}
