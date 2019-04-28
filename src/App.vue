<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <Main></Main>
  </div>
</template>

<script>
import CommonHeader from "@/components/header";
import Main from "@/components/Main";
export default {
  name: 'App',
  components: {
    CommonHeader,
    Main
  }
}
</script>
