<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {


  components: {

  },

  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter
  },

  mounted() {

  },

  methods: {

  },

}
</script>

<template>
  <div id="image">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

  </div>

</template>

<style>
#image {
  background-image: url('/public/img/photo-1678203699291-253ab7a4d6d2.avif');

  background-repeat: no-repeat;
  background-size: cover;


  height: 100%;
}


</style>
