<script>

import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: null,
            projectSlug: null,

            baseApiUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {

        this.projectSlug = this.$route.params.slug;

        axios.get(this.baseApiUrl + '/projects/' + this.projectSlug).then(res => {

            if (res.data.success) {
                
                this.project = res.data.project
                console.log(this.project)
            } else {

                this.$router.push({name: 'home'})
            }
        })
    },
}

</script>

<template>

    <div id = "single-page" class="container p-5" v-if="project">
        <div class="row justify-content-center   ">
            <div class="col-auto pb-5 position-relative ">
                <div class="text-center text-capitalize z-1 position-absolute top-50 start-50 translate-middle">
                    <h1>{{ project.name }}</h1>

                    <h2 v-if="project.type != null"> 
                        {{ project.type.title }}
                    </h2>
                </div>
                <img class="img-project" :src="'http://127.0.0.1:8000/storage/' + project.image" alt="">
            </div>
        </div>
        <div class="row justify-content-center gap-2 pb-4">
            <div class="col-auto" v-for="technology in project.technologies">                
                <img :src="'/img/img-loghi/' + technology.title + '.png'" alt="{{ technology.title }}">
            </div>
        </div>
        <div class="row">
            
            <div class="col-auto pt-3">
                <p>{{ project.description }}</p>

            </div>
        </div>
        
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>

<style lang="scss">

#single-page{
    h1,h2{
        -webkit-text-stroke: 1px black;

    }
    .img-project{
        width: 500px;
        height: 300px;
        object-fit: cover;
        object-position: center;
        
        border-radius: 10px;
        
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        filter: brightness(90%);
    }

    li{
        list-style: none;
    }
    img{
        width: 50px;
        height: 50px;

        object-fit: contain;
    }

   
}

</style>