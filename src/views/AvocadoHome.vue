<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h4 text-center">首頁</v-col>
      <v-col cols="12" class="text-center">
        <div class="deco">
          <h1>{{ currentText }}</h1>
          <h1>{{ currentTime }}</h1>
          <v-btn variant="text" icon="mdi-play" @click="startTimer" v-if="status !== STATUS.COUNTING"></v-btn>
          <v-btn variant="text" icon="mdi-pause" v-if="status === STATUS.COUNTING" @click="pauseTimer"></v-btn>
          <v-btn variant="text" icon="mdi-skip-next" v-if="currentItem.length > 0" @click="finishTimer"></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/settings'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { items, currentItem, timeleft } = storeToRefs(list)
const { countdown, setCurrentItem, setFinishItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}
const status = ref(STATUS.STOP)

// 倒數計時器
let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }
  if (currentItem.value.length === 0) return
  status.value = STATUS.COUNTING
  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}
const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}
const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP
  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()
  if (notify.value) {
    show()
  }
  setFinishItem()
  if (items.value.length > 0) {
    startTimer()
  }
}
const currentText = computed(() => {
  return currentItem.value.length > 0 ? currentItem.value : items.value.length > 0 ? '點擊開始' : '沒有事項'
})
const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

const { show } = useWebNotification({
  title: '事項完成',
  body: currentText.value,
  icon: 'https://cdn-icons-png.flaticon.com/512/9759/9759110.png'
})

</script>
<style scoped>
.deco {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-85%, -50%);
  width: 18rem;
  height: 15rem;
  line-height: 5rem;
  background: rgba(117, 187, 167, 0.5);
  border-radius: 25px;
  transition: 1s;
}

.deco:hover {
  background: rgba(66, 106, 90, 0.6);
  color: white;
}
</style>
