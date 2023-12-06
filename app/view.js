import { base, body, head, html, link, meta, noscript, script, title } from 'jste'
import metrika from './metrika.js'

export default ({ params, manifest, ymId }) => html({
  doctype : true,
  lang : params.lang,
  children : [
    head([
      title(params.title),
      base({
        href : '/',
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
        href : manifest['main.css'],
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
        src : manifest['main.js'],
      }),
      ymId && script(`(${ metrika })(${ ymId })`),
    ]),
  ],
})
