const script = document.getElementById('params')
const params = script?.text && JSON.parse(script.text)

export default params || {}
