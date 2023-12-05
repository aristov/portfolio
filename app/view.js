import { base, body, div, head, html, img, link, meta, noscript, script, title } from 'jste'

export default params => html({
  doctype : true,
  lang : params.lang,
  children : [
    head([
      title(params.title),
      base({
        href : '/'
      }),
      meta({
        charset : 'utf-8',
      }),
      meta({
        name : 'viewport',
        content : 'user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1',
      }),
      meta({
        name : 'description',
        content : params.description,
      }),
      meta({
        name : 'theme-color',
        content : params.theme_color,
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
      process.env.NODE_ENV === 'production' && link({
        rel : 'stylesheet',
        href : 'static/index.bundle.css',
        id : 'css',
      }),
      script({
        src : 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
        integrity : 'sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==',
        crossOrigin : 'anonymous',
        referrerPolicy : 'no-referrer',
      }),
      script({
        src : 'https://cdnjs.cloudflare.com/ajax/libs/luxon/3.4.4/luxon.min.js',
        integrity : 'sha512-dUlSLLkxslGILhPdCkALwk4szPhp3xmZIKFtlUD+O9Lslq41Aksmdt5OGqpomDoT4FsCUH70jQU8ezZHI3v1RQ==',
        crossOrigin : 'anonymous',
        referrerPolicy : 'no-referrer',
      }),
      script({
        id : 'params',
        type : 'application/json',
        text : JSON.stringify(params),
      }),
    ]),
    body([
      noscript('JavaScript must be enabled for the site to work properly'),
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
