<template>
 <div class = 'inputBox'>
 <p>Produkty:</p>
 <form @submit.prevent = 'addElement'>
  <input type = 'text' placeholder = 'produkt' v-model = 'text'>
  <input type = 'number' placeholder = 'koszt' v-model = 'cost'>
  <button type = 'submit'>Dodaj</button>
 </form>
 </div>
</template>

<script>
export default {
 data() {
  return {
   product: '', 
   cost: ''
  }
 },
 methods: {
  clearElements() {
   this.text = '';
   this.cost = '';
  },
  addElement() {
   if(this.text != '' && this.cost != ''){
    this.$emit('addElement', { 
     text: this.text, 
     cost: this.cost
    });
    this.clearElements();
   }
  }
 }
}
</script>

<style scoped>
 form {
  display: grid;
  grid-template-columns: auto auto auto;
 }
</style>

