<template>
 <div id = 'app'>
  <app-data v-on:addElement = 'addElements'></app-data>
   <ol v-for = 'product in products' :key = 'product.id'>
    <app-listElement :product = product.text :cost = product.cost></app-listElement>
   </ol>
  <app-sum :sum = sumAll></app-sum>
 </div>
</template>

<script>
 export default {
  data () {
   return{
    products: [],
    allSumedUp: 0,
    i: 0
   }
 },
 methods: {
  addElements(value) {
   value.id = this.products.length + 1;
   this.products.push(value);
  }
 },
 computed: {
  sumAll(){
   this.i = 0
   for(this.i = 0; this.i < this.products.length; this.i++) {
    this.allSumedUp += parseInt(this.products[this.i].cost);
   }
   return this.allSumedUp;
  }
 }
}
</script>

<style>
 #app {
  position: relative;
  width: 40%;
  left: 30%;
 }

 ol {
  list-style-type: none;
 }
</style>
