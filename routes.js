import Home from './components/Home.vue';
import Detail from './components/DetailItems.vue';
import About from './components/About.vue';
import Kontak from './components/Kontak.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/detail/:id', component: Detail, name: 'detail' },
  { path: '/about/', component: About, name: 'about' },
  { path: '/kontak/', component: Kontak, name: 'kontak' },
];

export default routes;
