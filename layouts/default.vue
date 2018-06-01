<template>
  <div class="container">
    <Header />
    <nuxt/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header
    }
  }
</script>
<style scoped>
  .container {
    margin: 0 auto;
    position: relative;
    background-color: salmon;
    height: 150vh;
  }

</style>
