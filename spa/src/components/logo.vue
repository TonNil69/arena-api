<script>
export default {
  name: 'logo',
  props: {
    altText: {
      required: true
    },
    theme: {
      required: true
    }
  }
}
</script>
<template>
  <img class="logo" :alt="altText" :src="`/assets/themes/${theme}/media/logo.png`">
</template>
