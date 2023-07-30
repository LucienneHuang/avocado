<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h4 text-center">通知</v-col>
      <v-col cols="12">
        <v-radio-group v-model="notify" inline>
          <v-radio label="開啟" :value="true"></v-radio>
          <v-radio label="關閉" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" class="text-h4 text-center">設定</v-col>
      <v-col cols="12">
        <v-table class="text-center" hover style="background: transparent;">
          <thead>
            <tr>
              <th class="text-center">名稱</th>
              <th class="text-center">試聽</th>
              <th class="text-center">選擇</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alarm in alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td><audio :src="alarm.file" controls></audio></td>
              <td>
                <v-radio-group v-model="selectedAlarmId">
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// 引用 setting store
import { useSettingsStore } from '@/store/settings'
// 用下面的東西解決解構 pinia 失去響應性的問題
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
// 可以把 pinia 的東西解構出來
// 如果直接解構 pinia store 的 state 出，會失去響應性

// 必須使用 storeToRefs 的輔助才能解構
const { selectedAlarmId, alarms, notify } = storeToRefs(settings)
</script>
