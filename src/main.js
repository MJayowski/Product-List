import Vue from 'vue'
import App from './App.vue'
import DataInput from './components/DataInput.vue';
import ListElement from './components/ListElement.vue';
import DataSummary from './components/DataSummary.vue';


Vue.component('app-listElement', ListElement);
Vue.component('app-data', DataInput);
Vue.component('app-sum', DataSummary);


new Vue({
  el: '#app',
  render: h => h(App)
})
