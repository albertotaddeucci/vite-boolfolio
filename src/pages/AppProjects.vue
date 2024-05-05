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

            projects: [],

            isLoading: false,

            apiLinks: [],

            apiPageNumber: 1,

            baseApiUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {
        this.apiCall();
    },

    methods: {

        apiCall() {

            axios.get(this.baseApiUrl + '/projects', {
                params: {
                    page: this.apiPageNumber
                }
            }).then(res => {

                this.projects = res.data.results.data;

                this.apiLinks = res.data.results.links;
            })
        },

        changeApiPage(pageNumber) {


            if (pageNumber == "&laquo; Previous" && this.apiPageNumber > 1) {


                this.apiPageNumber--;

            } else if (pageNumber == "Next &raquo;" && this.apiPageNumber < (this.apiLinks.length - 2)) {
                //this.apiLinks.length - 2 corrisponde alla lunghezza dell'array a cui sottraggo il previous and next(da qui il -2)

                this.apiPageNumber++;

            }

            if (!isNaN(pageNumber)) {

                this.apiPageNumber = pageNumber;
            }


            this.apiCall();

        },
    },

}
</script>

<template>
    <div class="container py-5 ">
        <h1 class="pb-4 text-center fw-bold text-uppercase">Progetti</h1>

        <div v-if="!isLoading" class="row gap-4 justify-content-center">
            <ProjectItem class="col-auto" v-for="currentProject in projects" :project="currentProject">
            </ProjectItem>

            <div id="pagination" class="d-flex justify-content-center p-0">

                <ul class="d-flex gap-2 p-0">

                    <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)"
                        :class="link.label == apiPageNumber ? 'active' : ''">

                    </li>

                </ul>

            </div>

        </div>
        <div v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    </div>

</template>

<style lang="scss">

#pagination {
    margin-top: 100px;
    padding-top: 20px;


    ul {

        list-style-type: none;

        li {

            padding: 10px;
            border-radius: 5%;

            text-decoration: none;
            color: white;

            transition: all .3s ease;

            cursor: pointer;

            &:hover,
            &.active {
                // background-color: rgba(255, 255, 255, 0.4);
                background-image: linear-gradient(to right, #699ffc, #bc38fe);
                color: black;
            }

        }
    }
}
</style>