/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = new Vue({
  el: '#app',
  data: {
    message: '¡Hola Vue!'
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprenda JavaScript' },
      { text: 'Aprenda Vue' },
      { text: 'Construya algo impresionanre' }
    ]
  }
});
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '¡Hola Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '¡Hola Vue!'
  }
});
// Define un nuevo componente llamado todo-item
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetales' },
      { id: 1, text: 'Queso' },
      { id: 2, text: 'Cualquier otra cosa que coman los humanos' },
      { id: 3, text: 'Manzana'},
      { id: 4, text: 'Pera' },
    ]
  }
});

