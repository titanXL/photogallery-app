<template>
  <LandingCover
    :backgroundImage="coverImage"
  />
</template>

<script>
  import LandingCover from '@/components/LandingCover';

  export default {
    components: {
      name: 'start-page',
      LandingCover
    },
    computed: {
      coverImage() {
        return this.$store.getters.getCoverImage
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
