import { base, body, div, head, html, img, link, meta, noscript, script, title } from 'jste'

export default () => html({
  doctype : true,
  lang : 'ru',
  children : [
    head([
      base({
        href : '/',
      }),
      title('Лариса Дедловская | архитектор, дизайнер интерьеров'),
      meta({
        charset : 'utf-8',
      }),
      link({
        rel : 'icon',
        href : 'favicon.ico',
      }),
      link({
        rel : 'preconnect',
        href : 'https://fonts.gstatic.com',
      }),
      link({
        href : 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap',
        rel : 'stylesheet',
      }),
      link({
        rel : 'stylesheet',
        href : 'static/index.bundle.css',
        id : 'css',
      }),
      meta({
        name : 'viewport',
        content : 'user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1',
      }),
      meta({
        name : 'theme-color',
        content : '#000000',
      }),
      meta({
        name : 'description',
        content : 'Лариса Дедловская — архитектор, дизайнер интерьеров',
      }),
      script({
        src : 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
        integrity : 'sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==',
        crossOrigin : 'anonymous',
        referrerPolicy : 'no-referrer',
      }),
      script({
        src : 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
        integrity : 'sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==',
        crossOrigin : 'anonymous',
        referrerPolicy : 'no-referrer',
      }),
      script({
        src : 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/ru.min.js',
        integrity : 'sha512-+yvkALwyeQtsLyR3mImw8ie79H9GcXkknm/babRovVSTe04osQxiohc1ukHkBCIKQ9y97TAf2+17MxkIimZOdw==',
        crossOrigin : 'anonymous',
        referrerPolicy : 'no-referrer',
      }),
    ]),
    body([
      noscript('Для правильной работы сайта необходимо включить JavaScript.'),
      script({
        src : 'static/index.bundle.js',
      }),
      script({
        type : 'text/javascript',
        children : '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(83177914, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});',
      }),
      noscript(div(img({
        src : 'https://mc.yandex.ru/watch/83177914',
        style : 'position:absolute; left:-9999px;',
        alt : '',
      }))),
    ]),
  ],
})
