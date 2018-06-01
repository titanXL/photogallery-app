<template>
  <div class="container" :style="{backgroundImage: 'url(' +(backgroundImage) + ')'}">
    <div class="teaser">
      <h1 class="teaser__title">Angeloff's wedding photography</h1>
      <h2 class="teaser__text">Get your fairytale wedding</h2>
    </div>
  </div>
</template>

<script>
    export default {
      name: "LandingContent",
      props: {
        backgroundImage: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    background-position: center;
    background-size: cover;
    filter: grayscale(.6);
    @extend %display-flex-aligned;
  }
  .teaser {
    @extend %display-flex-aligned;
    flex-direction: column;

    &__title {
      font-size: 4rem;
      color: $base-light-color;
      text-align: center;
      margin-bottom: 1rem;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
      letter-spacing: 1.1rem;
    }
    &__text {
      font-size: 2rem;
      color: $base-light-color;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
      letter-spacing: 1.1rem;
    }

    @media (max-width: 769px) {
      .container {
        background-image: url('https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/28239009_745977438939528_4683723981550358345_o.jpg?_nc_cat=0&oh=0ea8e697356a72465969ee6159b5a4fb&oe=5B8BD978');
      }
      &__title, &__text {
        letter-spacing: 1px;
      }
    }
  }

</style>
