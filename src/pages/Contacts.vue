<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';
import ContactForm from '../components/ContactForm.vue';


export default {

    name: 'Contacts',

    components: {
        ProjectItem,
        ContactForm,

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

<ContactForm></ContactForm>


</template>

<style lang="scss" scoped>
</style>