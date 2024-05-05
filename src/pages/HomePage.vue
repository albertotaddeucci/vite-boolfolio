<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';


export default {

  name: 'HomePage',

  components: {
    ProjectItem,

  },

  data() {
    return {
    }
  },

  mounted() {

  },

  methods: {
  },

}
</script>

<template>

  <div class="container py-5">
    <div id="hero-section" class=" d-flex align-items-center">
      <div id="hero-text" class="w-50 slide-in-up">

        <h1 class="fw-bold text-white mb-5">Ciao! <br>
          Sono Arianna e sono una web-developer pronta ad aiutarti nella realizzazione del tuo grande progetto!
        </h1>

        <p>Per iniziare puoi dare un'occhiata ai miei progetti</p>
      </div>

      <div id="hero-img" class="w-50 slide-in-up">
        <img src="/img/ImgProfile.png" alt="">
      </div>
    </div>
    <router-link :to="{ name: 'app-projects'}" class="btn"
      style="border: 1px solid #bc38fe;"><span
        class="d-flex align-items-center justify-content-center gap-2 fw-bold slide-in-up">
        I miei progetti <i class="fa-solid fa-arrow-right"></i>
      </span></router-link>

  </div>



</template>

<style lang="scss" scoped>


.btn {
  &:hover {
    background-color: #bc38bc;
    color: black;
  }
}

img {
  width: 100%;
}

/* Animazione slide-in dal basso */
@keyframes slideInUp {
  from {
    transform: translateY(50%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Applica l'animazione agli elementi */
.slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
}
</style>