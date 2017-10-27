<template>
  <div id="app">
    <div class="page">
      <oss-header></oss-header>
      <router-view></router-view>
      <oss-footer></oss-footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    'oss-header': Header,
    'oss-footer': Footer,
  },
};
</script>

<style scoped>

</style>
