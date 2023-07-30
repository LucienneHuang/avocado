// 獨立於 vue 元件之外的放資料的地方
// store 有好幾個，這邊定義一個叫做 app 的 store
import { defineStore } from 'pinia'
// 用 define 去定義我儲存的資料
// 這裡定義一個叫做 settings 的 store
export const useSettingsStore = defineStore('settings', {
  // state 是保存了什麼資料在這個 store 裡面
  // action 代表你有那些修改資料的 function，可以去呼叫 actions 去銷改 state的資料
  // getter 把資料經過 function 經過處理後再丟過去
  state: () => ({
    alarms: [
      // 如果你 js 要指到 assets 裡面檔案的話，必須要用 new URL('相對路徑', import.meta.url).href
      {
        id: 1,
        name: 'ALARM',
        file: new URL('@/assets/alarm.mp3', import.meta.url).href
      },
      {
        id: 2,
        name: 'YAY',
        file: new URL('@/assets/yay.mp3', import.meta.url).href
      }
    ],
    selectedAlarmId: 1,
    notify: false
  }),
  // 這個 store 的資料必須要寫成 function return
  /*  state () {
        return {
          aaa: 111
        }
    }
  */
  //  getter 是取資料的 function，你可以把資料處理好後再 return 出去
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarmId)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'avocado-settings',
    paths: [
      'selectedAlarmId', 'notify'
    ]
  }
})
/*
  export const useAppStore = defineStore({
    id: 'settings',
    state: () => ({
    })
  })
*/
