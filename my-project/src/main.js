import Vue from 'vue';
import NewApp from './NewApp.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(NewApp),
}).$mount('#app');
