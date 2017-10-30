import Vue from 'vue';
import Router from 'vue-router';
import Contributions from '@/components/Contributions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contributions',
      component: Contributions,
    },
  ],
});
