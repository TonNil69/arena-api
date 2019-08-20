<script>

export default {
  name: 'home',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
    Logo: () => import('@/components/logo.vue')
  }
}
</script>
<template>
  <div class="home">
    <logo
      altText="Company logo"
      :theme="$theme">
    </logo>
    <HelloWorld msg="Welcome to Your Vue.jss App"/>
  </div>
</template>
