<template>
 <li>
  <span class = 'product'>{{ product }}</span>
  <span class = 'cost'>{{ cost }}</span>
 </li>
</template>

<script>
 export default {
   props: ['product', 'cost']
  }
</script>

<style>
 li {
  border: 2px solid black;
  padding: 10px;
  display: grid;
  grid-template-columns: 14fr 1fr;
 }
</style>