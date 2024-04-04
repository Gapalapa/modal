<script>
export default {
  name: 'App',
};
</script>

<template lang="jade">
div#app.fixed.w-full.h-full.top-0.bottom-0.bg-black.flex.items-center.justify-center
  .max-w-80.container.mx-auto.bg-white.p-4
    h1.text-3xl.font-bold Hello from Jade!
    p Vue to modal
  button(@click="openModal") OPEN　
</template>

<style lang="scss" scoped>
@import './main.scss';

</style>
