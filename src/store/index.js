// 想像成 vue 元件之外的另外一個獨立的地方讓你放共通的資料
// 有需要的時候再從這邊取資料即可
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 這裡匯出給 plugins/index.js
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
