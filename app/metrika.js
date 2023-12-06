export default function(id) {
  const script = document.querySelector('script')
  const node = document.createElement('script')
  node.async = true
  node.src = 'https://mc.yandex.ru/metrika/tag.js'
  window.ym = (...args) => ym.a = [args]
  ym.l = Date.now()
  script.before(node)
  ym(id, 'init', {
    clickmap : true,
    trackLinks : true,
    accurateTrackBounce : true,
    webvisor : true,
  })
}
