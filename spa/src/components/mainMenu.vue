<script>
export default {
  components: {
    Logo: () => import('@/components/logo.vue'),
    MenuItem: () => import('@/components/menuItem.vue')
  },
  name: 'mainMenu'
}
</script>
<template>
  <nav class="menu">
    <logo
      altText="Company logo"
      :theme="$theme"
    ></logo>
    <menu-item to="/home" text="Dashboard"></menu-item>
    <menu-item to="/home" text="Caixa de entrada"></menu-item>
    <menu-item to="/home" text="Salas de aula"></menu-item>
    <menu-item to="/home" text="Biblioteca"></menu-item>
  </nav>
</template>
<style src="@/assets/themes/default/mainMenu.css"></style>
