<script>
import axios from 'axios';

export default {
    name: "ProjectItem",
    
    props:{
        project: Object,
        
    },

    data() {
        return {
            
            
        }
    },

        
}


</script>

<template>

<div class="card p-0" style="width: 18rem;">
  <div class="img-wrapper">
    <img :src="project.image ? 'http://127.0.0.1:8000/storage/' + project.image : '/img/fallback-image-one.jpg'" class="card-img-top" alt="...">
  </div>
  <div class="card-body">
    <h3 class="card-title mb-3">{{ project.name }}</h3>
    <!-- <p class="card-text">{{ project.description }}</p> -->
    <p class="card-text mb-3 fw-bold" v-if="project.type != null">{{ project.type.title }}</p>
    <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-info text-white mb-3">Mostra Progetto</router-link>
    <div class="d-flex flex-wrap justify-content-center gap-2 mb-3">
      <!-- <small class="card-text" v-for="technology in project.technologies">{{ technology.title }}</small> -->             
      <img class="techs" v-for="technology in project.technologies" :src="'/img/img-loghi/' + technology.title + '.png'" alt="{{ technology.title }}">
    </div>
  </div>
</div>

</template>

<style lang="scss">
  .card{
    position: relative;
     width: calc(100% / 4 - 20px * 4 / 3);
     height: 300px;
     overflow: hidden;

    .img-wrapper{
      width: 100%;
      height: 100%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .card-body{
      position: absolute;
      top: 100%;
      left: 0;

      width: 100%;
      height: 100%;
      display: none;

      background-image: linear-gradient(to right, #699ffc, #bc38fe);
      color: white;

      animation: 1s slide-up;
      animation-fill-mode: forwards;

      .techs{
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }

    &:hover{

      .card-body{
        display: flex;
        flex-direction: column;

        @keyframes slide-up {
          from {
            top: 100%;
          }
          to {
            top: 0%;
          }
        }
      }
    }
  }



</style>