import './env.js'
import { VK } from 'vk-io'

const vk = new VK({
  token : process.env.VK_ACCESS_TOKEN,
})

export default vk
