import Vue from 'vue';
import Router from 'vue-router';

import App from './components/App.vue';
import HomeView from './components/HomeView.vue';

Vue.use(Router);

var router = new Router();
router.map({
  '/': {
    component: HomeView
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
