<template>
  <div id="app">
    <oss-header></oss-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    'oss-header': Header,
  },
};
</script>

<style>
#app {

}
</style>
