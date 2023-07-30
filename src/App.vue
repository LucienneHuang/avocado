<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail width="5rem" permanent color="primary">
      <v-list>
        <v-list-item prepend-avatar="./assets/avocado.png" title="酪梨鐘" subtitle="歡迎使用"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="首頁" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-list-box-outline" title="事項" to="/list"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定" to="/settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background: url('/avocado/avocadobg.jpg') no-repeat center/cover;">
      <!-- Component 是目前頁面該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 讓路由切換時不會銷毀元件，用 include 指定只有 Home 不會被銷毀 -->
        <!-- component 是動態元件，顯示 is 綁定的元件 -->
        <keep-alive include="Home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
