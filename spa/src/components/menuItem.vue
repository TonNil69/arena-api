<script>
export default {
  name: 'menuItem',
  props: {
    text: {
      required: true
    },
    to: {
      required: true
    }
  }
}
</script>
<template>
  <router-link :to="to" class="menuitem">
    <img height="30px" width="30px" class="ico">
    {{ text }}
  </router-link>
</template>
<style src="@/assets/themes/default/menuItem.css"></style>
