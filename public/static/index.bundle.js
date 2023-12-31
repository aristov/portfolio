/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _SlideShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _AlbumGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _FileList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var _ErrorContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);













class App extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  state = {
    open : false,
    data : null,
  }

  render() {
    const path = decodeURIComponent(location.pathname).replace(/\/$/, '') || '/'
    this.class = {
      open : this.state.open,
      homepage : path === '/',
    }
    return new _Inner__WEBPACK_IMPORTED_MODULE_2__.Inner([
      new _Header__WEBPACK_IMPORTED_MODULE_1__.Header({
        data : this.state.data,
        open : this.state.open,
        toggleNav : this.toggleNav,
        closeNave : this.closeNav,
      }),
      (0,_router__WEBPACK_IMPORTED_MODULE_10__.router)([
        {
          path : /^\/[а-яёй\w\-]+\/[а-яёй\w\-]+$/i,
          render : () => new _SlideShow__WEBPACK_IMPORTED_MODULE_4__.SlideShow({ path }),
        },
        ...api.config.sections.map(section => ({
          path : section.path,
          render : () => new _AlbumGroup__WEBPACK_IMPORTED_MODULE_5__.AlbumGroup({ path, key : path }),
        })),
        {
          path : '/Проектирование',
          render : () => new _FileList__WEBPACK_IMPORTED_MODULE_6__.FileList,
        },
        {
          path : '/Блог',
          render : () => new _Blog__WEBPACK_IMPORTED_MODULE_8__.Blog,
        },
        {
          path : '/Контакты',
          render : () => new _Contacts__WEBPACK_IMPORTED_MODULE_7__.Contacts,
        },
        {
          path : '/',
          render : () => new _SlideShow__WEBPACK_IMPORTED_MODULE_4__.SlideShow({ path : '/', auto : true }),
        },
        {
          path : /.*/,
          render : () => new _Main__WEBPACK_IMPORTED_MODULE_3__.Main(new _ErrorContent__WEBPACK_IMPORTED_MODULE_9__.ErrorContent),
        },
      ]),
      new Backdrop({ onclick : this.closeNav }),
    ])
  }

  componentDidMount() {
    window.onpopstate = () => this.setState()
    document.onclick = e => {
      if(e.target.href && e.target.classList.contains('Link')) {
        this.setState()
      }
    }
  }

  componentWillUnmount() {
    window.onpopstate = null
    document.onclick = null
  }

  toggleNav = () => {
    this.setState(state => ({ open : !state.open }))
  }

  closeNav = () => {
    this.setState({ open : false })
  }
}

class Backdrop extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see {@link https://www.w3.org/TR/html}
 * @see {@link https://html.spec.whatwg.org}
 */
module.exports = __webpack_require__(4)


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const HtmlElem = __webpack_require__(5)

exports.HtmlA = class HtmlA extends HtmlElem {}
exports.HtmlAbbr = class HtmlAbbr extends HtmlElem {}
exports.HtmlAddress = class HtmlAddress extends HtmlElem {}
exports.HtmlArea = class HtmlArea extends HtmlElem {}
exports.HtmlArticle = class HtmlArticle extends HtmlElem {}
exports.HtmlAside = class HtmlAside extends HtmlElem {}
exports.HtmlAudio = class HtmlAudio extends HtmlElem {}
exports.HtmlB = class HtmlB extends HtmlElem {}
exports.HtmlBase = class HtmlBase extends HtmlElem {}
exports.HtmlBdi = class HtmlBdi extends HtmlElem {}
exports.HtmlBdo = class HtmlBdo extends HtmlElem {}
exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlElem {}
exports.HtmlBody = class HtmlBody extends HtmlElem {}
exports.HtmlBr = class HtmlBr extends HtmlElem {}
exports.HtmlButton = class HtmlButton extends HtmlElem {}
exports.HtmlCanvas = class HtmlCanvas extends HtmlElem {}
exports.HtmlCaption = class HtmlCaption extends HtmlElem {}
exports.HtmlCite = class HtmlCite extends HtmlElem {}
exports.HtmlCode = class HtmlCode extends HtmlElem {}
exports.HtmlCol = class HtmlCol extends HtmlElem {}
exports.HtmlColGroup = class HtmlColGroup extends HtmlElem {}
exports.HtmlData = class HtmlData extends HtmlElem {}
exports.HtmlDataList = class HtmlDataList extends HtmlElem {}
exports.HtmlDd = class HtmlDd extends HtmlElem {}
exports.HtmlDel = class HtmlDel extends HtmlElem {}
exports.HtmlDetails = class HtmlDetails extends HtmlElem {}
exports.HtmlDfn = class HtmlDfn extends HtmlElem {}
exports.HtmlDialog = class HtmlDialog extends HtmlElem {}
exports.HtmlDiv = class HtmlDiv extends HtmlElem {}
exports.HtmlDl = class HtmlDl extends HtmlElem {}
exports.HtmlDt = class HtmlDt extends HtmlElem {}
exports.HtmlEm = class HtmlEm extends HtmlElem {}
exports.HtmlEmbed = class HtmlEmbed extends HtmlElem {}
exports.HtmlFieldSet = class HtmlFieldSet extends HtmlElem {}
exports.HtmlFigCaption = class HtmlFigCaption extends HtmlElem {}
exports.HtmlFigure = class HtmlFigure extends HtmlElem {}
exports.HtmlFooter = class HtmlFooter extends HtmlElem {}
exports.HtmlForm = class HtmlForm extends HtmlElem {}
exports.HtmlH1 = class HtmlH1 extends HtmlElem {}
exports.HtmlH2 = class HtmlH2 extends HtmlElem {}
exports.HtmlH3 = class HtmlH3 extends HtmlElem {}
exports.HtmlH4 = class HtmlH4 extends HtmlElem {}
exports.HtmlH5 = class HtmlH5 extends HtmlElem {}
exports.HtmlH6 = class HtmlH6 extends HtmlElem {}
exports.HtmlHGroup = class HtmlHGroup extends HtmlElem {}
exports.HtmlHead = class HtmlHead extends HtmlElem {}
exports.HtmlHeader = class HtmlHeader extends HtmlElem {}
exports.HtmlHr = class HtmlHr extends HtmlElem {}
exports.HtmlHtml = class HtmlHtml extends HtmlElem {}
exports.HtmlI = class HtmlI extends HtmlElem {}
exports.HtmlIFrame = class HtmlIFrame extends HtmlElem {}
exports.HtmlImg = class HtmlImg extends HtmlElem {}
exports.HtmlInput = class HtmlInput extends HtmlElem {}
exports.HtmlIns = class HtmlIns extends HtmlElem {}
exports.HtmlKbd = class HtmlKbd extends HtmlElem {}
exports.HtmlLabel = class HtmlLabel extends HtmlElem {}
exports.HtmlLegend = class HtmlLegend extends HtmlElem {}
exports.HtmlLi = class HtmlLi extends HtmlElem {}
exports.HtmlLink = class HtmlLink extends HtmlElem {}
exports.HtmlMain = class HtmlMain extends HtmlElem {}
exports.HtmlMap = class HtmlMap extends HtmlElem {}
exports.HtmlMark = class HtmlMark extends HtmlElem {}
exports.HtmlMenu = class HtmlMenu extends HtmlElem {}
exports.HtmlMeta = class HtmlMeta extends HtmlElem {}
exports.HtmlMeter = class HtmlMeter extends HtmlElem {}
exports.HtmlNav = class HtmlNav extends HtmlElem {}
exports.HtmlNoScript = class HtmlNoScript extends HtmlElem {}
exports.HtmlObject = class HtmlObject extends HtmlElem {}
exports.HtmlOl = class HtmlOl extends HtmlElem {}
exports.HtmlOptGroup = class HtmlOptGroup extends HtmlElem {}
exports.HtmlOption = class HtmlOption extends HtmlElem {}
exports.HtmlOutput = class HtmlOutput extends HtmlElem {}
exports.HtmlP = class HtmlP extends HtmlElem {}
exports.HtmlParam = class HtmlParam extends HtmlElem {}
exports.HtmlPicture = class HtmlPicture extends HtmlElem {}
exports.HtmlPre = class HtmlPre extends HtmlElem {}
exports.HtmlProgress = class HtmlProgress extends HtmlElem {}
exports.HtmlQ = class HtmlQ extends HtmlElem {}
exports.HtmlRp = class HtmlRp extends HtmlElem {}
exports.HtmlRt = class HtmlRt extends HtmlElem {}
exports.HtmlRuby = class HtmlRuby extends HtmlElem {}
exports.HtmlS = class HtmlS extends HtmlElem {}
exports.HtmlSamp = class HtmlSamp extends HtmlElem {}
exports.HtmlScript = class HtmlScript extends HtmlElem {}
exports.HtmlSection = class HtmlSection extends HtmlElem {}
exports.HtmlSelect = class HtmlSelect extends HtmlElem {}
exports.HtmlSmall = class HtmlSmall extends HtmlElem {}
exports.HtmlSource = class HtmlSource extends HtmlElem {}
exports.HtmlSpan = class HtmlSpan extends HtmlElem {}
exports.HtmlStrong = class HtmlStrong extends HtmlElem {}
exports.HtmlStyle = class HtmlStyle extends HtmlElem {}
exports.HtmlSub = class HtmlSub extends HtmlElem {}
exports.HtmlSummary = class HtmlSummary extends HtmlElem {}
exports.HtmlSup = class HtmlSup extends HtmlElem {}
exports.HtmlTBody = class HtmlTBody extends HtmlElem {}
exports.HtmlTFoot = class HtmlTFoot extends HtmlElem {}
exports.HtmlTHead = class HtmlTHead extends HtmlElem {}
exports.HtmlTable = class HtmlTable extends HtmlElem {}
exports.HtmlTd = class HtmlTd extends HtmlElem {}
exports.HtmlTemplate = class HtmlTemplate extends HtmlElem {}
exports.HtmlTextArea = class HtmlTextArea extends HtmlElem {}
exports.HtmlTh = class HtmlTh extends HtmlElem {}
exports.HtmlTime = class HtmlTime extends HtmlElem {}
exports.HtmlTitle = class HtmlTitle extends HtmlElem {}
exports.HtmlTr = class HtmlTr extends HtmlElem {}
exports.HtmlTrack = class HtmlTrack extends HtmlElem {}
exports.HtmlU = class HtmlU extends HtmlElem {}
exports.HtmlUl = class HtmlUl extends HtmlElem {}
exports.HtmlVar = class HtmlVar extends HtmlElem {}
exports.HtmlVideo = class HtmlVideo extends HtmlElem {}
exports.HtmlWbr = class HtmlWbr extends HtmlElem {}

exports.HtmlA.defineProps([
  'origin',
])

exports.HtmlA.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'target',
  'download',
  'rel',
  'rev',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlArea.defineProps([
  'origin',
  'relList',
])

exports.HtmlArea.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'alt',
  'coords',
  'shape',
  'target',
  'download',
  'rel',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlAudio.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlAudio.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
])

exports.HtmlAudio.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
], true)

exports.HtmlBase.defineProps([
  'href',
  'target',
], true)

exports.HtmlBlockQuote.defineProps([
  'cite',
], true)

exports.HtmlButton.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlButton.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlButton.defineProps([
  'autofocus',
  'disabled',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'type',
  'value',
], true)

exports.HtmlCanvas.defineMethods([
  'getContext',
  'probablySupportsContext',
  'toDataURL',
  'toBlob',
])

exports.HtmlCanvas.defineProps([
  'width',
  'height',
], true)

exports.HtmlCol.defineProps([
  'span',
], true)

exports.HtmlColGroup.defineProps([
  'span',
], true)

exports.HtmlData.defineProps([
  'value',
], true)

exports.HtmlDel.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlDetails.defineProps([
  'open',
], true)

exports.HtmlDialog.defineMethods([
  'show',
  'showModal',
  'close',
])

exports.HtmlDialog.defineProps([
  'open',
  'returnValue',
], true)

exports.HtmlEmbed.defineProps([
  'src',
  'type',
  'width',
  'height',
], true)

exports.HtmlFieldSet.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlFieldSet.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlFieldSet.defineProps([
  'disabled',
  'name',
], true)

exports.HtmlForm.defineMethods([
  'checkValidity',
  'reportValidity',
  'reset',
  'submit',
])

exports.HtmlForm.defineProps([
  'acceptCharset',
  'action',
  'autocomplete',
  'enctype',
  'method',
  'name',
  'noValidate',
  'target',
], true)

exports.HtmlIFrame.defineProps([
  'sandbox',
])

exports.HtmlIFrame.defineProps([
  'src',
  'srcdoc',
  'allowFullScreen',
  'allowPaymentRequest',
  'width',
  'height',
  'referrerPolicy',
], true)

exports.HtmlImg.defineMethods([
  'decode',
])

exports.HtmlImg.defineProps([
  'complete',
  'currentSrc',
  'naturalWidth',
  'naturalHeight',
])

exports.HtmlImg.defineProps([
  'alt',
  'referrerPolicy',
  'src',
  'srcset',
  'sizes',
  'crossOrigin',
  'useMap',
  'isMap',
  'height',
  'width',
], true)

exports.HtmlInput.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
  'stepDown',
  'stepUp',
])

exports.HtmlInput.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlInput.defineProps([
  'accept',
  'alt',
  'autocomplete',
  'autofocus',
  'defaultChecked',
  'checked',
  'dirName',
  'disabled',
  'files',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'indeterminate',
  'inputMode',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'defaultValue',
  'value',
  'valueAsDate',
  'valueAsNumber',
  'width',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlIns.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlLabel.defineProps([
  'htmlFor',
], true)

exports.HtmlLi.defineProps([
  'value',
], true)

exports.HtmlLink.defineProps([
  'relList',
  'sizes',
])

exports.HtmlLink.defineProps([
  'href',
  'crossOrigin',
  'rel',
  'rev',
  'media',
  'nonce',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlMap.defineProps([
  'name',
], true)

exports.HtmlMeta.defineAttrs([
  'charset',
])

exports.HtmlMeta.defineProps([
  'httpEquiv',
  'name',
  'content',
], true)

exports.HtmlMeter.defineProps([
  'value',
  'min',
  'max',
  'low',
  'high',
  'optimum',
], true)

exports.HtmlObject.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlObject.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlObject.defineProps([
  'name',
  'data',
  'type',
  'typeMustMatch',
  'useMap',
  'width',
  'height',
], true)

exports.HtmlOl.defineProps([
  'reversed',
  'start',
  'type',
], true)

exports.HtmlOptGroup.defineProps([
  'disabled',
  'label',
], true)

exports.HtmlOption.defineProps([
  'index',
])

exports.HtmlOption.defineProps([
  'disabled',
  'label',
  'defaultSelected',
  'selected',
  'value',
  'text',
], true)

exports.HtmlOutput.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlOutput.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlOutput.defineProps([
  'htmlFor',
  'defaultValue',
  'name',
  'value',
], true)

exports.HtmlParam.defineProps([
  'name',
  'value',
], true)

exports.HtmlProgress.defineProps([
  'position',
])

exports.HtmlProgress.defineProps([
  'value',
  'max',
], true)

exports.HtmlQ.defineProps([
  'cite',
], true)

exports.HtmlScript.defineProps([
  'src',
  'type',
  'noModule',
  'charset',
  'async',
  'defer',
  'crossOrigin',
  'integrity',
  'referrerPolicy',
  'text',
  'nonce',
], true)

exports.HtmlSelect.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlSelect.defineProps([
  'type',
  'length',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlSelect.defineProps([
  'autocomplete',
  'autofocus',
  'disabled',
  'multiple',
  'name',
  'required',
  'size',
  'selectedIndex',
  'value',
], true)

exports.HtmlSource.defineProps([
  'src',
  'type',
  'srcset',
  'sizes',
  'media',
], true)

exports.HtmlStyle.defineProps([
  'media',
  'nonce',
  'type',
], true)

exports.HtmlTd.defineProps([
  'cellIndex',
])

exports.HtmlTd.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
], true)

exports.HtmlTextArea.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
])

exports.HtmlTextArea.defineProps([
  'type',
  'textLength',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlTextArea.defineProps([
  'autocomplete',
  'autofocus',
  'cols',
  'dirName',
  'disabled',
  'inputMode',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'wrap',
  'step',
  'defaultValue',
  'value',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlTh.defineProps([
  'cellIndex',
])

exports.HtmlTh.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
  'scope',
  'abbr',
], true)

exports.HtmlTime.defineProps([
  'dateTime',
], true)

exports.HtmlTitle.defineProps([
  'text',
], true)

exports.HtmlTr.defineProps([
  'rowIndex',
  'sectionRowIndex',
])

exports.HtmlTrack.defineProps([
  'readyState',
  'track',
])

exports.HtmlTrack.defineProps([
  'kind',
  'src',
  'srclang',
  'label',
  'default',
], true)

exports.HtmlVideo.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlVideo.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
  'videoWidth',
  'videoHeight',
])

exports.HtmlVideo.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
  'width',
  'height',
  'poster',
], true)


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Dataset = __webpack_require__(6)
const DomElem = __webpack_require__(8)
const Style = __webpack_require__(12)

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @returns {string}
   */
  get innerText() {
    return this.node.innerText
  }

  /**
   * @param {string} innerText
   */
  set innerText(innerText) {
    this.node.innerText = innerText
  }

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    return this.hasAttr('tabindex') ? this.node.tabIndex : null
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    if(tabIndex === null) {
      this.removeAttr('tabindex')
    }
    else this.node.tabIndex = tabIndex
  }
}

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineAttrs([
  Dataset,
  Style,
])

HtmlElem.defineProps([
  'isContentEditable',
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'inputMode',
  'lang',
  'title',
  'translate',
], true)

module.exports = HtmlElem


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(7)

let undefined

class Dataset extends AttrType
{
  /**
   * @param {DomElem} elem
   * @returns {DOMStringMap}
   */
  static get(elem) {
    return elem.node.dataset
  }

  /**
   * @param {DomElem} elem
   * @param {{}} dataset
   */
  static set(elem, dataset) {
    const map = elem.node.dataset
    for(let [name, value] of Object.entries(dataset)) {
      if(value !== undefined) {
        map[name] = dataset[name]
      }
    }
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'dataset' in elem.node
  }
}

module.exports = Dataset


/***/ }),
/* 7 */
/***/ ((module) => {

/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  static defaultValue = null

  /**
   * @param {DomElem} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.localName, value)
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return elem.node.hasAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   */
  static remove(elem) {
    elem.node.removeAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {*} value
   * @returns {boolean}
   */
  static removeOnValue(elem, value) {
    return value === null && !this.remove(elem)
  }

  /**
   * @returns {string}
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {string}
   */
  static get localName() {
    return this.name.toLowerCase()
  }
}

module.exports = AttrType


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DomNode = __webpack_require__(9)
const window = __webpack_require__(11)

const { document } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class DomElem extends DomNode
{
  className = undefined

  static prefix = ''

  static namespace = ''

  /**
   * @return {*|Element}
   */
  createNode() {
    let name, constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name.startsWith(prefix)) {
      name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    return super.createNode()
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    super.init(deep)
    this.setClassName()
  }

  setClassName() {
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    let constructor = this.constructor
    const prefix = constructor.prefix
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        break
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.has(this)? attr.get(this) : attr.defaultValue
    }
    return this.node.getAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(typeof attr === 'function') {
      if(!attr.removeOnValue(this, value)) {
        attr.set(this, value)
      }
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.has]
   * @returns {boolean}
   */
  hasAttr(attr) {
    return typeof attr === 'function'?
      attr.has(this) :
      this.node.hasAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.remove]
   */
  removeAttr(attr) {
    if(typeof attr === 'function') {
      attr.remove(this)
    }
    else this.node.removeAttribute(attr)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attrs() {
    const attrs = {}
    for(const { name, value } of this.node.attributes) {
      attrs[name] = value
    }
    return attrs
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null?
        this.removeAttr(name) :
        this.setAttr(name, value)
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get class() {
    return this.node.classList
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set class(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        this.node.classList.toggle(token, value[token])
      }
    }
    else this.node.classList = value
  }

  /**
   * @returns {string}
   */
  get html() {
    return this.node.innerHTML
  }

  /**
   * @param {string} html
   */
  set html(html) {
    this.node.innerHTML = html
  }

  /**
   * @returns {DOMRect}
   */
  get rect() {
    return this.node.getBoundingClientRect()
  }

  /**
   * Get a text content of the node
   * @returns {string}
   */
  get text() {
    return this.node.textContent
  }

  /**
   * Set a text content of the node
   * @param {string} text
   */
  set text(text) {
    this.node.textContent = text
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    let attr, name
    for(attr of attrs) {
      name = typeof attr === 'string'? attr : attr.attrName
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.getAttr(attr)
        },
        set(value) {
          this.setAttr(attr, value)
        },
      })
    }
  }
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineProps([
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.defineProps([
  'id',
], true)

module.exports = DomElem


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { default : morphdom } = __webpack_require__(10)
const window = __webpack_require__(11)

const SPECIAL_PROPS = ['node', 'children']
const { document, CustomEvent, DocumentFragment, EventTarget, Node } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = null
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
  }

  /**
   * @param {*} props
   * @return {{}}
   */
  normalizeProps(props) {
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
  }

  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setProps()
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
  }

  setProps() {
    let name, value
    for(name in this.props) {
      if(!this.props.hasOwnProperty(name)) {
        continue
      }
      value = this.props[name]
      if(SPECIAL_PROPS.includes(name) || value === undefined) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
      else if(name in this.node) {
        this.node[name] = value
      }
    }
  }

  /**
   * @param {*} children
   * @return {(*|DomNode|string)[]}
   */
  normalizeChildren(children) {
    const result = []
    for(const child of [children].flat(Infinity)) {
      if(child === false || child === null || child === undefined) {
        continue
      }
      result.push(child)
    }
    return result
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    Object.assign(this.state, typeof state === 'function' ? state(this.state) : state)
    this.props.children = this.normalizeChildren(this.render())
    if(this.props.children.length) {
      const fragment = new DocumentFragment
      fragment.append(...this.props.children.map(child => {
        if(child.node) {
          child.init(true)
          return child.node
        }
        return child
      }))
      morphdom(this.node, fragment, options)
    }
    this.componentDidUpdate(this.props, prevState)
  }

  /**
   * @return {*}
   */
  render() {
    return this.props.children
  }

  componentDidMount() {
    void null
  }

  componentDidUpdate() {
    void null
  }

  componentWillUnmount() {
    void null
  }

  /**
   * @param {boolean} keepNode
   */
  destroy(keepNode = false) {
    if(!this.node) {
      return
    }
    this.componentWillUnmount()
    for(const child of this.props.children) {
      child.node && child.destroy(true)
    }
    for(const type of this.__handlers.keys()) {
      this.node[type] = null
    }
    keepNode || this.node.remove()
    this.node.__instance = null
    this.node = null
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback(e, e.target.__instance)
            this.__handlers.set(name, callback)
          }
          else this.__handlers.delete(name)
        },
        get() {
          return this.node[name]
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this.node[name](...args)
        },
      })
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    for(const name of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          this.node[name] = value
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {{}} props
   * @param {Node} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props)
    const fragment = new DocumentFragment
    instance.init(true)
    if(parentNode) {
      fragment.append(instance.node)
      morphdom(parentNode, fragment, options)
    }
    return instance
  }
}

const options = {
  childrenOnly : true,
  /**
   * @param {Element} node
   * @return {string}
   */
  getNodeKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode} toNode
   */
  onNodeAdded(toNode) {
    if(toNode.__instance) {
      document.contains(toNode) && toNode.__instance.componentDidMount()
    }
  },
  /**
   * @param {Element} fromNode
   * @param {Element} toNode
   */
  onBeforeElUpdated(fromNode, toNode) {
    const fromInstance = fromNode.__instance
    const toInstance = toNode.__instance
    if(toInstance && fromInstance) {
      if(fromInstance.constructor === toInstance.constructor) {
        toInstance.state = fromInstance.state
      }
    }
  },
  /**
   * @param {Element} fromNode
   * @param {Element} toNode
   */
  onBeforeElChildrenUpdated(fromNode, toNode) {
    const fromInstance = fromNode.__instance
    const toInstance = toNode.__instance
    if(toInstance && fromInstance) {
      for(const type of fromInstance.__handlers.keys()) {
        fromNode[type] = null
      }
      for(const type of toInstance.__handlers.keys()) {
        fromNode[type] = toNode[type]
        toNode[type] = null
      }
      if(fromInstance.constructor === toInstance.constructor) {
        toInstance.__prevProps = fromInstance.props
      }
      toInstance.node = fromNode
      fromNode.__instance = toInstance
      toNode.__instance = null
    }
    onElChildrenUpdated(fromNode)
    /**
     * fixme
     * @param {ChildNode} fromNode
     */
    function onElChildrenUpdated(fromNode) {
      const fromInstance = fromNode.__instance
      if(fromInstance) {
        if(fromInstance.__prevProps) {
          fromInstance.componentDidUpdate(fromInstance.__prevProps, fromInstance.state)
          fromInstance.__prevProps = null
        }
        else fromInstance.componentDidMount()
      }
    }
  },
  /**
   * @param {ChildNode} fromNode
   */
  onBeforeNodeDiscarded(fromNode) {
    fromNode.__instance?.destroy(true)
  },
}

/**
 * type : [constructor, bubbles, cancelable]
 */
const events = {
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  load : [window.Event],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  scroll : [window.Event, true],
  submit : [window.Event, true, true],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
  transitioncancel : [window.TransitionEvent, true],
  transitionend : [window.TransitionEvent, true, true],
  transitionrun : [window.TransitionEvent, true],
  transitionstart : [window.TransitionEvent, true],
}

DomNode.defineEvents(Object.keys(events))

Object.defineProperty(DomNode.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = DomNode


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOCUMENT_FRAGMENT_NODE = 11;

function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    // document-fragments dont have attributes so lets not do anything
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }

    // update attributes on original DOM element
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
        attr = toNodeAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                if (attr.prefix === 'xmlns'){
                    attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
                }
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    var fromNodeAttrs = fromNode.attributes;

    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
        attr = fromNodeAttrs[d];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;

            if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                fromNode.removeAttributeNS(attrNamespaceURI, attrName);
            }
        } else {
            if (!toNode.hasAttribute(attrName)) {
                fromNode.removeAttribute(attrName);
            }
        }
    }
}

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
    var template = doc.createElement('template');
    template.innerHTML = str;
    return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
    if (!range) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
    var fragment = doc.createElement('body');
    fragment.innerHTML = str;
    return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
      // createContextualFragment doesn't support
      // <template> support not available in IE
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }

    return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;

    if (fromNodeName === toNodeName) {
        return true;
    }

    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);

    // If the target element is a virtual DOM node or SVG node then we may
    // need to normalize the tag name before comparing. Normal HTML elements that are
    // in the "http://www.w3.org/1999/xhtml"
    // are converted to upper case
    if (fromCodeStart <= 90 && toCodeStart >= 97) { // from is upper and to is lower
        return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) { // to is upper and from is lower
        return toNodeName === fromNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name);
        }
    }
}

var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
        var parentNode = fromEl.parentNode;
        if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === 'OPTGROUP') {
                parentNode = parentNode.parentNode;
                parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                if (fromEl.hasAttribute('selected') && !toEl.selected) {
                    // Workaround for MS Edge bug where the 'selected' attribute can only be
                    // removed if set to a non-empty value:
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                    fromEl.setAttribute('selected', 'selected');
                    fromEl.removeAttribute('selected');
                }
                // We have to reset select element's selectedIndex to -1, otherwise setting
                // fromEl.selected using the syncBooleanAttrProp below has no effect.
                // The correct selectedIndex will be set in the SELECT special handler below.
                parentNode.selectedIndex = -1;
            }
        }
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!toEl.hasAttribute('value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;

            if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                return;
            }

            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!toEl.hasAttribute('multiple')) {
            var selectedIndex = -1;
            var i = 0;
            // We have to loop through children of fromEl, not toEl since nodes can be moved
            // from toEl to fromEl directly when morphing.
            // At the time this special handler is invoked, all children have already been morphed
            // and appended to / removed from fromEl, so using fromEl here is safe and correct.
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while(curChild) {
                nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                if (nodeName === 'OPTGROUP') {
                    optgroup = curChild;
                    curChild = optgroup.firstChild;
                } else {
                    if (nodeName === 'OPTION') {
                        if (curChild.hasAttribute('selected')) {
                            selectedIndex = i;
                            break;
                        }
                        i++;
                    }
                    curChild = curChild.nextSibling;
                    if (!curChild && optgroup) {
                        curChild = optgroup.nextSibling;
                        optgroup = null;
                    }
                }
            }

            fromEl.selectedIndex = selectedIndex;
        }
    }
};

var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
  if (node) {
      return (node.getAttribute && node.getAttribute('id')) || node.id;
  }
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var onElChildrenUpdated = options.onElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = Object.create(null);
        var keyedRemovalList = [];

        function addKeyedRemoval(key) {
            keyedRemovalList.push(key);
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    // if we find a duplicate #id node in cache, replace `el` with cache value
                    // and morph it to the child node.
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    } else {
                      handleNodeAdded(curChild);
                    }
                } else {
                  // recursively call for curChild and it's children to see if we find something in
                  // fromNodesLookup
                  handleNodeAdded(curChild);
                }

                curChild = nextSibling;
            }
        }

        function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                var fromNextSibling = curFromNodeChild.nextSibling;
                if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                    // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                } else {
                    // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                }
                curFromNodeChild = fromNextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);

            if (toElKey) {
                // If an element with an ID is being morphed then it will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (!childrenOnly) {
                // optional
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                // update attributes on original DOM element first
                morphAttrs(fromEl, toEl);
                // optional
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
              morphChildren(fromEl, toEl);
            } else {
              specialElHandlers.TEXTAREA(fromEl, toEl);
            }

            onElChildrenUpdated(fromEl);
        }

        function morphChildren(fromEl, toEl) {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;
            var curFromNodeKey;

            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;

            // walk the children
            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = getNodeKey(curToNodeChild);

                // walk the fromNode children all the way through
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    curFromNodeKey = getNodeKey(curFromNodeChild);

                    var curFromNodeType = curFromNodeChild.nodeType;

                    // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
                    var isCompatible = undefined;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        if (curFromNodeType === ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes

                            if (curToNodeKey) {
                                // The target node has a key so we want to match it up with the correct element
                                // in the original DOM tree
                                if (curToNodeKey !== curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                        if (fromNextSibling === matchingFromEl) {
                                            // Special case for single element removals. To avoid removing the original
                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
                                            // we will instead discard the current node and wait until the next
                                            // iteration to properly match up the keyed target element with its matching
                                            // element in the original tree
                                            isCompatible = false;
                                        } else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's move the original DOM node into the current position and morph
                                            // it.

                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                            // fromNextSibling = curFromNodeChild.nextSibling;

                                            if (curFromNodeKey) {
                                                // Since the node is keyed it might be matched up later so we defer
                                                // the actual removal to later
                                                addKeyedRemoval(curFromNodeKey);
                                            } else {
                                                // NOTE: we skip nested keyed nodes from being removed since there is
                                                //       still a chance they will be matched up later
                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                            }

                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else {
                                        // The nodes are not compatible since the "to" node has a key and there
                                        // is no matching keyed node in the source tree
                                        isCompatible = false;
                                    }
                                }
                            } else if (curFromNodeKey) {
                                // The original has a key
                                isCompatible = false;
                            }

                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                // MORPH
                                morphEl(curFromNodeChild, curToNodeChild);
                            }

                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                            }

                        }
                    }

                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        // Nothing else to do as we already recursively called morphChildren above
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }

                    curFromNodeChild = fromNextSibling;
                } // END: while(curFromNodeChild) {}

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    // MORPH
                    morphEl(matchingFromEl, curToNodeChild);
                } else {
                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                    if (onBeforeNodeAddedResult !== false) {
                        if (onBeforeNodeAddedResult) {
                            curToNodeChild = onBeforeNodeAddedResult;
                        }

                        if (curToNodeChild.actualize) {
                            curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                        }
                        fromEl.appendChild(curToNodeChild);
                        handleNodeAdded(curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphChildren(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) {
                        morphedNode.nodeValue = toNode.nodeValue;
                    }

                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
                return;
            }

            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (morphdom);


/***/ }),
/* 11 */
/***/ ((module) => {

if(typeof window === 'undefined') {
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(7)

class Style extends AttrType
{
  /**
   * @param {HtmlElem} elem
   * @returns {CSSStyleDeclaration}
   */
  static get(elem) {
    return elem.node.style
  }

  /**
   * @param {HtmlElem} elem
   * @param {string|{}} style
   */
  static set(elem, style) {
    if(typeof style === 'string') {
      elem.node.style = style
    }
    else Object.assign(elem.node.style, style)
  }

  /**
   * @param {HtmlElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'style' in elem.node
  }
}

module.exports = Style


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);







const { Hammer } = window

class Header extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHeader
{
  render() {
    return [
      new _Inner__WEBPACK_IMPORTED_MODULE_1__.Inner([
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH1(new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({ href : '/', text : 'Лариса Дедловская' })),
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlButton({
          className : 'MenuButton',
          onclick : this.props.toggleNav,
          children : new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlSpan({
            className : this.props.open? 'icon icon-cancel' : 'icon icon-menu',
          }),
        }),
      ]),
      this._nav = new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlNav([
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlUl({
          attrs : { role : 'menu' },
          onclick : this.props.closeNav,
          children : [
            _api__WEBPACK_IMPORTED_MODULE_4__["default"].config.sections.map(section => new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              attrs : { role : 'menuitem' },
              children : new _Link__WEBPACK_IMPORTED_MODULE_2__.Link({
                text : section.title,
                href : section.path,
                onkeydown : this.onKeyDown,
              }),
            })),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              attrs : { role : 'menuitem' },
              children : new _Link__WEBPACK_IMPORTED_MODULE_2__.Link({
                href : '/Проектирование',
                text : 'Проектирование',
                onkeydown : this.onKeyDown,
              }),
            }),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              attrs : { role : 'menuitem' },
              children : new _Link__WEBPACK_IMPORTED_MODULE_2__.Link({
                href : '/Блог',
                text : 'Блог',
                onkeydown : this.onKeyDown,
              }),
            }),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              attrs : { role : 'menuitem' },
              children : new _Link__WEBPACK_IMPORTED_MODULE_2__.Link({
                href : '/Контакты',
                text : 'Контакты',
                onkeydown : this.onKeyDown,
              }),
            }),
          ],
        }),
        new _Social__WEBPACK_IMPORTED_MODULE_3__.Social,
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlSmall(`© ${ (new Date()).getFullYear() } Лариса Дедловская`),
      ]),
    ]
  }

  componentDidMount() {
    this._hammertime = new Hammer(this._nav.node)
    this._hammertime.on('swipe', e => {
      e.direction === Hammer.DIRECTION_RIGHT && this.props.closeNav()
    })
  }

  componentWillUnmount() {
    this._hammertime.off('swipe')
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
    if(e.code === 'ArrowUp') {
      e.target.parentElement.previousElementSibling?.querySelector('a').focus()
    }
    if(e.code === 'ArrowDown') {
      e.target.parentElement.nextElementSibling?.querySelector('a').focus()
    }
  }
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inner": () => (/* binding */ Inner)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Inner extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Link extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA
{
  render() {
    this.onclick = this.onClick
    return super.render()
  }

  onClick = e => {
    e.preventDefault()
    history.pushState(null, '', this.pathname)
  }
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Social": () => (/* binding */ Social)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



class Social extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  render() {
    return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://instagram.com/design.ld',
        children : new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon('instagram'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://facebook.com/larisa.dedlovskaya',
        children : new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon('facebook'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://mona.livejournal.com',
        children : new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon('livejournal'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://vk.com/larisadedlovskaya',
        children : new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon('vkontakte'),
      }),
    ])
  }
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Icon extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlSpan
{
  render() {
    this.className = 'icon icon-' + this.props.children
  }
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const { protocol, hostname, port } = window.location
const pathname = port? '/portfolio/public/' : '/'
const BASE_URL = protocol + '//' + hostname + pathname

function normalize(name) {
  return name.replace(/[\s():,./]+/g, '_')
}

const api = {
  config: _config__WEBPACK_IMPORTED_MODULE_0__["default"],
  cache : {
    '/' : {
      owner_id : _config__WEBPACK_IMPORTED_MODULE_0__["default"].owner_id,
      id : _config__WEBPACK_IMPORTED_MODULE_0__["default"].album_id,
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
    const res = await fetch(url)
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
    const res = await fetch(url)
    const { items } = await res.json()
    album.items = items
    return album
  },
  async getBlog(offset) {
    const url = new URL('blog.php', BASE_URL)
    url.searchParams.set('owner_id', _config__WEBPACK_IMPORTED_MODULE_0__["default"].owner_id)
    url.searchParams.set('offset', offset)
    const res = await fetch(url)
    return res.json()
  },
}

for(const section of _config__WEBPACK_IMPORTED_MODULE_0__["default"].sections) {
  api.cache[section.path = '/' + normalize(section.title)] = section
}

window.api = api

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  owner_id : -204943414,
  album_id : 278146389,
  sections : [
    {
      title : 'Современная классика',
      owner_id : -205424841,
    },
    {
      title : 'Лофт / минимализм',
      owner_id : -205407254,
    },
    {
      title : 'Экстерьер / другое',
      owner_id : -205425358,
    },
  ],
  docs : [
    {
      title : 'Концептуальный проект',
      path : '/data/docs/conceptual_project.pdf',
    },
    {
      title : 'Эскизный проект',
      path : '/data/docs/draft_project.pdf',
    },
    {
      title : 'Рабочий проект',
      path : '/data/docs/working_project.pdf',
    },
    {
      title : 'Примеры работ в 3D',
      path : '/data/docs/examples_3d.pdf',
    },
  ],
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



class Main extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlMain
{
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideShow": () => (/* binding */ SlideShow)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ErrorContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _SlideItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _SlideShow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);










const { Hammer } = window

class SlideShow extends _Main__WEBPACK_IMPORTED_MODULE_4__.Main
{
  state = {
    album : null,
    current : 0,
    err : null,
  }

  render() {
    const { album, err } = this.state
    if(err) {
      return new _ErrorContent__WEBPACK_IMPORTED_MODULE_1__.ErrorContent
    }
    if(!album) {
      return new _Loading__WEBPACK_IMPORTED_MODULE_3__.Loading
    }
    const section = album.section
    const current = this.state.current
    const prev = this.getIndex(current - 1)
    const next = this.getIndex(current + 1)
    const items = [album.items[prev], album.items[current], album.items[next]]
    if(album.title) {
      document.title = album.title + ' | Лариса Дедловская'
    }
    return new _Inner__WEBPACK_IMPORTED_MODULE_6__.Inner([
      section && new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2([
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
          href : section.path,
          onkeydown : this.onBackKeyDown,
          text : section.title,
        }),
        ' → ' + album.title,
      ]),
      this._ref = new SlideList({
        class : ['appear'],
        onclick : this.onClick,
        ontransitionend : this.onTransitionEnd,
        children : items.map((item, i) => new _SlideItem__WEBPACK_IMPORTED_MODULE_5__.SlideItem({
          item,
          index : i,
          key : item.id,
        })),
      }),
      new SlideControl([
        new SlidePrev({
          onclick : this.onPrevButtonClick,
          onkeydown : this.onButtonKeyDown,
          title : 'Предыдущий слайд',
          children : new _Icon__WEBPACK_IMPORTED_MODULE_2__.Icon('angle-left'),
        }),
        new SlideCounter([current + 1, ' / ', album.items.length]),
        new SlideNext({
          onclick : this.onNextButtonClick,
          onkeydown : this.onButtonKeyDown,
          title : 'Следующий слайд',
          children : new _Icon__WEBPACK_IMPORTED_MODULE_2__.Icon('angle-right'),
        }),
      ]),
    ])
  }

  async componentDidMount() {
    await this.load()
    if(this.state.err) {
      return
    }
    this.props.auto && this.tick()
    this._hammertime = new Hammer(this._ref.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_LEFT) {
        this.switchSlide(1, true)
      }
      else if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.switchSlide(-1, true)
      }
    })
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    this._timer && clearTimeout(this._timer)
    this._timer = null
    this._hammertime?.off('swipe')
    document.removeEventListener('keydown', this.onKeyDown)
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    try {
      this.setState({ album : await _api__WEBPACK_IMPORTED_MODULE_7__["default"].getAlbum(this.props.path) })
      setTimeout(() => this.setAttr('aria-busy', 'false'))
    }
    catch(err) {
      this.setState({ err })
    }
  }

  tick() {
    this._timer = setTimeout(() => {
      this.switchSlide(1)
      this.tick()
    }, 5000)
  }

  switchSlide(shift, stop = false) {
    if(stop) {
      this._timer && clearTimeout(this._timer)
      this._timer = null
    }
    if(this._transition) {
      return
    }
    if(shift > 0) { // fixme https://github.com/patrick-steele-idem/morphdom/issues/200
      this._transition = true
    }
    this.setState(state => ({ current : this.getIndex(state.current + shift) }))
  }

  getIndex(i) {
    const items = this.state.album.items
    return i < 0? items.length + i : i % items.length
  }

  onClick = () => {
    this.switchSlide(1, true)
  }

  onKeyDown = e => {
    switch(e.code) {
      case 'ArrowLeft':
        this.switchSlide(-1, true)
        break
      case 'ArrowRight':
      case 'Space':
        this.switchSlide(1, true)
        break
      default:
        void null
    }
  }

  onTransitionEnd = () => {
    this._transition = false
  }

  onPrevButtonClick = () => {
    this.switchSlide(-1, true)
  }

  onNextButtonClick = () => {
    this.switchSlide(1, true)
  }

  onButtonKeyDown = e => {
    e.code === 'Space' && e.stopPropagation()
  }

  onBackKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}

class SlideList extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}

class SlideControl extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}

class SlidePrev extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}

class SlideCounter extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}

class SlideNext extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContent": () => (/* binding */ ErrorContent)
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _ErrorContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);



class ErrorContent extends _Content__WEBPACK_IMPORTED_MODULE_0__.Content
{
  render() {
    document.title = 'Страница не найдена'
    return '404'
  }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Content extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Loading extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  render() {
    return 'Загрузка...'
  }
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideItem": () => (/* binding */ SlideItem)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class SlideItem extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  render() {
    const url = this.props.item.sizes.find(size => size.type === 'z').url
    const style = {
      backgroundImage : `url(${ url })`,
      left : (this.props.index - 1) * 100 + '%',
    }
    if(location.hostname !== 'new.lddesign.ru') {
      style.backgroundSize = 'cover'
    }
    this.setAttr('role', 'img')
    this.style = style
  }
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumGroup": () => (/* binding */ AlbumGroup)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _AlbumItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _ErrorContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _AlbumGroup_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);









class AlbumGroup extends _Main__WEBPACK_IMPORTED_MODULE_5__.Main
{
  state = {
    group : null,
    err : null,
  }

  render() {
    const group = this.state.group
    if(this.state.err) {
      return new _ErrorContent__WEBPACK_IMPORTED_MODULE_2__.ErrorContent
    }
    if(!group) {
      return new _Loading__WEBPACK_IMPORTED_MODULE_4__.Loading
    }
    document.title = group.title + ' | Лариса Дедловская'
    return new _Inner__WEBPACK_IMPORTED_MODULE_3__.Inner({
      class : ['appear'],
      children : [
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({
          className : 'AlbumItem',
          children : new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2(group.title),
        }),
        group.items.map(album => new _AlbumItem__WEBPACK_IMPORTED_MODULE_1__.AlbumItem({ key : album.id, album })),
      ]
    })
  }

  componentDidMount() {
    void this.load()
  }

  componentDidUpdate(prevProps) {
    if(this.props.path !== prevProps.path) {
      void this.load()
    }
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    try {
      this.setState({ group : await _api__WEBPACK_IMPORTED_MODULE_6__["default"].getSection(this.props.path) })
      setTimeout(() => this.setAttr('aria-busy', 'false'))
    }
    catch(err) {
      this.setState({ err })
    }
  }
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumItem": () => (/* binding */ AlbumItem)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



class AlbumItem extends _Link__WEBPACK_IMPORTED_MODULE_1__.Link
{
  render() {
    const album = this.props.album
    const url = album.sizes.find(size => size.type === 'r').src
    this.href = album.path
    this.style = { backgroundImage : `url(${ url })` }
    this.onkeydown = this.onKeyDown
    return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({ className : 'AlbumInfo', text : album.title })
  }

  onKeyDown = e => {
    switch(e.code) {
      case 'Space':
        e.target.click()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        e.target.previousElementSibling?.focus()
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        e.target.nextElementSibling?.focus()
        break
      default:
        void null
    }
  }
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileList": () => (/* binding */ FileList)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _FileLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _FileList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);







class FileList extends _Main__WEBPACK_IMPORTED_MODULE_3__.Main
{
  render() {
    document.title = 'Проектирование | Лариса Дедловская'
    return new _Content__WEBPACK_IMPORTED_MODULE_1__.Content([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2('Проектирование'),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      _api__WEBPACK_IMPORTED_MODULE_4__["default"].config.docs.map(item => new _FileLink__WEBPACK_IMPORTED_MODULE_2__.FileLink({ key : item.path, item })),
    ])
  }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileLink": () => (/* binding */ FileLink)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



class FileLink extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA
{
  render() {
    this.href = this.props.item.path
    this.target = '_blank'
    this.rel = 'noreferrer'
    return [
      new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon('file-pdf'),
      this.props.item.title,
    ]
  }
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contacts": () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ContactsLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _Contacts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);






class Contacts extends _Main__WEBPACK_IMPORTED_MODULE_3__.Main
{
  render() {
    document.title = 'Контакты | Лариса Дедловская'
    return new _Content__WEBPACK_IMPORTED_MODULE_2__.Content([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2('Контакты'),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'mailto:lddesign@mail.ru',
        icon : 'mail',
        children : 'lddesign@mail.ru',
      }),
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'tel:+79257711473',
        icon : 'phone',
        children : '+7 925 771 1473',
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://instagram.com/design.ld',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'instagram',
        children : 'design.ld',
      }),
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://facebook.com/larisa.dedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'facebook',
        children : 'larisa.dedlovskaya',
      }),
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://vk.com/larisadedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'vkontakte',
        children : 'larisadedlovskaya',
      }),
      new _ContactsLink__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://mona.livejournal.com',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'livejournal',
        children : 'mona',
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({
        className : 'Author',
        children : [
          'Разработчик сайта: ',
          new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
            href : 'mailto:vv.aristov@gmail.com',
            target : '_blank',
            rel : 'noreferrer',
            text : 'Вячеслав Аристов',
          }),
        ]
      }),
    ])
  }
}


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsLink": () => (/* binding */ ContactsLink)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



class ContactsLink extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA
{
  render() {
    return [
      new _Icon__WEBPACK_IMPORTED_MODULE_1__.Icon(this.props.icon),
      this.props.children,
    ]
  }
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blog": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);






class Blog extends _Main__WEBPACK_IMPORTED_MODULE_2__.Main
{
  state = {
    data : null,
  }

  render() {
    const data = this.state.data
    if(!data) {
      return new _Loading__WEBPACK_IMPORTED_MODULE_1__.Loading
    }
    this.onscroll = this.onScroll
    return new _Feed__WEBPACK_IMPORTED_MODULE_0__.Feed({ data, class : ['appear'] })
  }

  componentDidMount() {
    void this.load()
  }

  async load() {
    this.setAttr('aria-busy', 'true')
    const data = this.state.data || []
    const { count, items } = await _api__WEBPACK_IMPORTED_MODULE_3__["default"].getBlog(data.length)
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


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feed": () => (/* binding */ Feed)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);



class Feed extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  render() {
    this.setAttr('role', 'feed')
    return [
      this.props.data.map(item => {
        if(!item.text && !item.attachments) {
          return null
        }
        if(item.copy_history) {
          return null
        }
        return new _Post__WEBPACK_IMPORTED_MODULE_1__.Post({ key : item.id, item })
      }),
    ]
  }
}


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const { moment } = window

class Post extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlArticle
{
  render() {
    const item = this.props.item
    const [title, ...text] = item.text.split('\n\n')
    return [
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlTime(moment.unix(item.date).format('D MMM YYYY')),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH3({ html : replace(title) }),
      !!text.length && text.map(p => new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlP({ html : replace(p) })),
      item.attachments?.map(attachment => {
        if(attachment.type === 'photo') {
          return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlImg({
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

function replace(str) {
  return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/**
 * @param {{path:string,render:function}[]} routes
 * @return {*|string|DomElem|*[]|string[]|DomElem[]}
 */
function router(routes) {
  const pathname = decodeURIComponent(location.pathname).replace(/\/$/, '')
  let route, path
  for(route of routes) {
    path = route.path
    if(typeof path === 'string') {
      if(path.replace(/\/$/, '') === pathname) {
        return route.render()
      }
    }
    else if(path.test(pathname)) {
      return route.render()
    }
  }
}


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const render = app => {
  app?.destroy()
  return _App__WEBPACK_IMPORTED_MODULE_1__.App.render({}, document.getElementById('root'))
}

let app = render()

 undefined

})();

/******/ })()
;