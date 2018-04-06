<template>
 <div class = 'sumBox'>
  <p>Koszt wszystkich produktów: {{ sum }}</p>
 </div>
</template>

<script>
 export default {
  props: ['sum']
 }
</script>

<style scoped>
 .sumBox{
  width: 100%;   
 }
</style>

