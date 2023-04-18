<template>
    <!-- <FriendCard /> -->
    <!-- Carousel -->
    <div class="container">
        <div id="demo" class="carousel slide" data-bs-ride="carousel" style="height: 300px; margin-top: 20vh">

            <!-- Indicators/dots -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <!-- <img src="la.jpg" alt="Los Angeles" class="d-block w-100"> -->
                    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
                        <FriendCard />
                        <FriendCard />
                        <FriendCard />
                    </div>
                </div>
                <div class="carousel-item">
                    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
                        <FriendCard />
                        <FriendCard />
                        <FriendCard />
                    </div>
                </div>
                <div class="carousel-item">
                    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
                        <FriendCard />
                        <FriendCard />
                        <FriendCard />
                    </div>
                </div>
            </div>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FriendCard from "./FriendCard.vue";

export default defineComponent({
    name: 'Slider',

    components: {
        FriendCard
    },

    setup() {
        // let cards: [
        //     {

        //     }
        // ]
    }
})

</script>

<style>
.carousel-control-prev,
.carousel-control-next {
    background-color: rgb(99, 99, 210);
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}
</style>