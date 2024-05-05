<script>


export default {
    name: "AppFooter",



    data() {
        return {
            icons: [
                'fa-brands fa-facebook-f',
                'fa-brands fa-instagram',
                'fa-brands fa-twitter',
                'fa-brands fa-linkedin-in'
            ]

        }
    },


}


</script>

<template>
    <div class="container py-5">

        <footer class="d-flex justify-content-between">
            <span class="w-25">
                Copyright (c): 2024 Boolean Classe #118
            </span>

            <div class="logo">
                <router-link :to="{ name: 'home'}" class="navbar-brand">
                    <p class="text-uppercase fw-bold">boolfolio</p>
                </router-link>


            </div>
            <div class="social w-25 d-flex justify-content-end">
                <div id="social-icons">
                    <a href="" class="d-flex gap-3 text-white">
                        <i v-for="icon in icons" :class="icon" :key="icon"></i>
                    </a>

                </div>
            </div>
        </footer>
    </div>


</template>

<style lang="scss" scoped>
.container {
    margin-top: 100px;
    padding-top: 20px;
    border-top: solid 1px rgba(128, 128, 128, 0.411);
}

span {
    font-size: 12px;
    color: rgba(128, 128, 128, 0.411);
}

.logo {
    background-image: linear-gradient(to right, #699ffc, #bc38fe);
    /* Colore sfumato */
    -webkit-background-clip: text;
    /* Applico la sfumatura al testo */
    -webkit-text-fill-color: transparent;
    /* Nascondo il colore del testo */
}
</style>