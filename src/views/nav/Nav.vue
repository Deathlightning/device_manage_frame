<template>
  <div class="nav">
    <div class="item">{{nav_list[0]}}</div>
  </div>
</template>

<script>
const user_type = 0;
import constant from './nav_const';
export default {
  data() {
    return {
      nav_list: [],
    }
  },
  mounted() {
    this.nav_list = user_type == 0 ? constant.purchaser_menu : constant.management_menu;
    console.log(this.nav_list[0]);
  }

}
</script>

<style>
.item {
}
</style>
