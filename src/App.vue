<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-show="$route.meta.navShow"/>
  </div>
</template>

<script>

import Tabbar from '@components/content/tabbar/Tabbar'

export default {
  name: 'App',
  components: {
    Tabbar,
  }
};
</script>

<style>
  @import url('./assets/css/base.css');
</style>
