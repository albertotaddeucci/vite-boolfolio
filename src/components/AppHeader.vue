<script>


export default {
    name: "AppHeader",



    data() {
        return {
            showNavbar: false,

        }
    },

    mounted() {
        // Mostra la navbar con un effetto slide-in dopo un breve ritardo
        setTimeout(() => {
            this.showNavbar = true;
        }, 100);
    },


}


</script>

<template>
    <div class="container py-5">        

        <nav v-if="showNavbar" class="navbar navbar-expand-lg slide-in" style="z-index: 1;">
            <div class="container-fluid justify-content-between ">
                <div class="col-auto">
                    <router-link :to="{ name: 'home'}" class="navbar-brand">
                        <h1 class="display-1 text-uppercase fw-bold">Boolfolio</h1>
                    </router-link>

                </div>
                <div class="col-auto">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul class="d-flex list-unstyled gap-4 align-items-center ">
                            <router-link :to="{ name: 'home' }"
                                class="link text-decoration-none fw-bold text-white">Home</router-link>
    
                            <router-link :to="{ name: 'about' }" class="link text-decoration-none fw-bold text-white">Chi
                                sono</router-link>
    
                            <router-link :to="{ name: 'app-projects'}"
                                class="link text-decoration-none fw-bold text-white">I miei progetti</router-link>
    
                            <router-link :to="{ name: 'contacts'}"
                                class="link text-decoration-none fw-bold text-white">Contatti</router-link>
    
                        </ul>
    
                    </div>

                </div>
               
            </div>
        </nav>
    </div>


</template>

<style lang="scss" scoped>
h1 {
    font-size: 50px;
    margin-bottom: 0;
    background-image: linear-gradient(to right, #699ffc, #bc38fe);
    /* Colore sfumato */
    -webkit-background-clip: text;
    /* Applico la sfumatura al testo */
    -webkit-text-fill-color: transparent;
    /* Nascondo il colore del testo */
}

.link{
    position: relative;
    padding-bottom: 5px;
    &:hover::before{

        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        border-bottom: 2px solid #bc38fe;
    }
    
}


button {
    border: 1px solid #bc38fe;
    border-radius: 8px;
    background-color: transparent;
}

@keyframes slideIn {
    from {
        transform: translateY(-100%); // Inizia sopra la pagina
        opacity: 0;
    }

    to {
        transform: translateY(0); // Torna alla posizione originale
        opacity: 1;
    }
}

.navbar.slide-in {
    animation: slideIn 0.8s ease-in-out forwards; 
}
</style>