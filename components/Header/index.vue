<template>
  <nav class="navigation" :class="{'background-light': navBackgroudColor, 'color-light': navColor}" >
    <ul class="navigation__items" :class="{'background-light': navBackgroudColor && isMobile, 'color-light': navColor}" :style="{top: showMenu ? '5rem' : '-150%'}">
      <nuxt-link class="navigation__item" to="/info" tag="li">Info</nuxt-link>
      <nuxt-link class="navigation__item" to="/work" tag="li">Work</nuxt-link>
      <nuxt-link class="navigation__item" to="/contact" tag="li">Contact</nuxt-link>
    </ul>
    <div class="navigation__logo">LOGO</div>
    <div class="navigation__social-media-icons">
      <a  v-for="icon in icons" :key="icon.name" :href="'https://' + icon.name + '/' + icon.id">
        <font-awesome-icon  :icon="['fab', icon.name]" />
      </a>
    </div>
    <hamburger
      class="navigation__hamburger"
      :stroke='2'
      :gap='5'
      :color='navColor ? "#ffffff" : "#000000"'
      :open.sync='showMenu'
      style="width: 36px"
    >
    </hamburger>
  </nav>
</template>

<script>
  import {socialMediaIcons} from '@/utils/social-media'
  export default {
    name: "Header",
    data() {
      return {
        icons: socialMediaIcons,
        navBackgroudColor: false,
        navColor: true,
        showMenu: false,
        isMobile: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      this.isMobile = window.innerWidth < 769
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleScroll(e) {
        const top = e.target.scrollingElement.scrollTop
        if(top > 60) {
          this.navBackgroudColor = true
          this.navColor = false
        } else {
          this.navBackgroudColor = false
          this.navColor = true
        }
      },
      handleResize(e) {
        this.isMobile = window.innerWidth < 769
      }
    }
  }
</script>

<style scoped lang="scss">
.navigation {
  margin-bottom: 3rem;
  font-size: 1.6rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  top:0;
  left: 0;
  right: 0;
  transition: all .6s ease-in;

  &__items {
    display: flex;
    margin-left: 5rem;
    flex-basis: 15rem;
    transition: top .6s $snappy-bezier, background-color .6s ease-in;
  }

  &__item {
    margin-right: 3rem;
    &:hover {
      cursor: pointer;
    }
  }

  &__social-media-icons {
    font-size: 2.4rem;
    display: none;
    flex-basis: 15rem;

    & > a {
      color: inherit;
    }
    & > a:not(:last-child) {
      margin-right: 3rem;
    }
    & > a:last-child {
      margin-right: 5rem;
    }
  }

  &__logo {
    flex-grow: 1;
    text-align: center;
  }

  &__hamburger {
    display: none;
    width: 3.6rem;
  }

  @media screen and(min-width: 769px) {
    &__social-media-icons {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and(max-width: 769px) {
    &__hamburger {
      display: inline-block;
      margin-right: 2rem;
    }

    &__logo {
      text-align: left;
      padding-left: 2rem;
    }

    &__items {
      position: absolute;
      top: -150%;
      flex-direction: column;
      width: 100%;
      margin-left: 0;
      align-items: center;
      z-index: -1;
    }

    &__item {
      margin-right: 0;
      margin-bottom: .7rem;
    }
  }
}
</style>
