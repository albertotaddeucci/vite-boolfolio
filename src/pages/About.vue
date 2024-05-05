<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';


export default {

    name: 'Contacts',

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
    <div id="about-section" class="mb-5">
        <div class="overlay"></div>

        <p class="overlay-text fw-semibold">"La mia missione? <br> Trasformare la tua visione in un'esperienza
            utente straordinaria."</p>


    </div>

    <div class="container">
        <h2 class="text-center text-uppercase mb-5">La mia storia</h2>
        <div id="history" class="d-flex gap-4  slide-in-left">
            <div id="history-img" class="w-50">
                <img src="/public/img/ImgAbout.jpg" alt="">
            </div>

            <div id="history-text" class="w-50">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate voluptatem iure magnam
                    rerum debitis amet inventore sapiente fugiat culpa ipsam est molestiae illo, odit nihil facere
                    beatae esse. Dolorem?
                    Hic cupiditate dolor corrupti beatae veritatis unde omnis. Deleniti vero est dolorum voluptate? Qui,
                    temporibus officiis, ad provident est, nesciunt eius suscipit ab cum in voluptates saepe obcaecati
                    dolorem? Incidunt?
                    Dolores iusto, voluptas animi rem laudantium dicta reprehenderit accusantium illo aliquam tenetur
                    atque non consectetur corporis ad omnis fuga commodi autem ipsa odit eaque! Officia recusandae
                    consequuntur similique ut sint.
                    Veniam exercitationem nemo obcaecati dolores sapiente, nulla ex et expedita accusantium, molestiae
                    unde, maxime quibusdam? Dolore voluptates beatae aliquam tenetur totam quod autem qui doloribus
                    distinctio, asperiores ut, placeat unde?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nulla vitae blanditiis iusto impedit
                    aperiam architecto aliquam, in delectus perferendis omnis quidem expedita unde? Quibusdam, quas?
                    Adipisci reiciendis soluta maxime!
                    Rem architecto repellendus voluptatem soluta molestiae, provident amet nemo sequi esse corporis.
                    Quas, tempora earum! Quam, quia! Modi, sunt autem nihil omnis officia deserunt, aliquam tenetur
                    animi aut facere dolorum!
                    Fugiat, obcaecati quae sapiente facilis saepe quam quos repellendus alias illum minus quasi corporis
                    voluptate aliquam perspiciatis fuga ipsa vero repudiandae cupiditate? Officia ad officiis delectus
                    at, harum ex non.
                    Sit a dolorem aut corporis odio omnis nostrum nisi, doloremque itaque quis voluptates eaque
                    exercitationem tempore delectus tempora expedita rem praesentium similique. Illo quisquam non quo
                    sapiente! Velit, voluptatem eum.
                </p>
            </div>
        </div>

        <div id="history" class="d-flex gap-4 slide-in-right">
            <div id="history-text" class="w-50">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate voluptatem iure magnam
                    rerum debitis amet inventore sapiente fugiat culpa ipsam est molestiae illo, odit nihil facere
                    beatae esse. Dolorem?
                    Hic cupiditate dolor corrupti beatae veritatis unde omnis. Deleniti vero est dolorum voluptate? Qui,
                    temporibus officiis, ad provident est, nesciunt eius suscipit ab cum in voluptates saepe obcaecati
                    dolorem? Incidunt?
                    Dolores iusto, voluptas animi rem laudantium dicta reprehenderit accusantium illo aliquam tenetur
                    atque non consectetur corporis ad omnis fuga commodi autem ipsa odit eaque! Officia recusandae
                    consequuntur similique ut sint.
                    Veniam exercitationem nemo obcaecati dolores sapiente, nulla ex et expedita accusantium, molestiae
                    unde, maxime quibusdam? Dolore voluptates beatae aliquam tenetur totam quod autem qui doloribus
                    distinctio, asperiores ut, placeat unde?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nulla vitae blanditiis iusto impedit
                    aperiam architecto aliquam, in delectus perferendis omnis quidem expedita unde? Quibusdam, quas?
                    Adipisci reiciendis soluta maxime!
                    Rem architecto repellendus voluptatem soluta molestiae, provident amet nemo sequi esse corporis.
                    Quas, tempora earum! Quam, quia! Modi, sunt autem nihil omnis officia deserunt, aliquam tenetur
                    animi aut facere dolorum!
                    Fugiat, obcaecati quae sapiente facilis saepe quam quos repellendus alias illum minus quasi corporis
                    voluptate aliquam perspiciatis fuga ipsa vero repudiandae cupiditate? Officia ad officiis delectus
                    at, harum ex non.
                    Sit a dolorem aut corporis odio omnis nostrum nisi, doloremque itaque quis voluptates eaque
                    exercitationem tempore delectus tempora expedita rem praesentium similique. Illo quisquam non quo
                    sapiente! Velit, voluptatem eum.
                </p>
            </div>
            <div id="history-img" class="w-50">
                <img src="/public/img/ImgAbout.jpg" alt="">
            </div>

        </div>

        <router-link :to="{ name: 'contacts'}" class="btn"
            style="border: 1px solid #bc38fe;"><span
                class="d-flex align-items-center justify-content-center gap-2 fw-bold">
                Contattami <i class="fa-solid fa-arrow-right"></i>
            </span></router-link>

    </div>




</template>

<style lang="scss" scoped>
#about-section {
    height: 800px;
    background-image: url('/img/ImgAbout.jpg');
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
    z-index: 0;
    margin-top: -200px;
    position: relative;

    p {
        font-size: 50px;
        line-height: 50px;
    }

}

.overlay {
    /* Overlay nero con opacità ridotta */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.605);
    z-index: 1;
}

.overlay-text {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2;
    z-index: 2;
}


img {
    max-height: 350px;
    width: 100%;
    object-fit: cover;
}

#history {
    margin-bottom: 100px;
}

.btn {
    &:hover {
        background-color: #bc38bc;
        color: black;
    }
}

/* Slide-in da destra verso sinistra */
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Slide-in da sinistra verso destra */
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}


.slide-in-right {
    animation: slideInRight 1s ease-out forwards;
}

.slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
}


// img {
//     width: 100%;
// }</style>