<template>
  <div class="main">
      <Nav></Nav>
  </div>
</template>

<script>
import Nav from '@/views/nav/Nav'
export default {
    components:{
        Nav,
    }
}
</script>

<style>
.main{
    display: flex; 
    background-color: aqua;
}
</style>
