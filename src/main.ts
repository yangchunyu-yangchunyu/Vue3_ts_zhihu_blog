import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store/index'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css'
import './api/mock'
import { Switch } from 'vant';
import { Search } from 'vant';
import { Pagination } from 'vant';


const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(vuex)
app.mount('#app')
app.use(Switch);
app.use(Search);
app.use(Pagination);
