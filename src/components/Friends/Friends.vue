<template>
    <div class="container" style="display: flex; flex-direction: column; align-self: center;">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h1>AMIGOS</h1>
        </div>
        <div class="container-grid" style="margin-top: 20px;">

            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>

            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>

            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>

            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>
            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>
            <div class="" style="display: flex; flex-direction: column; align-items: center;">
                <FriendCard />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FriendCard from "@/components/Friends/FriendCard.vue"
import Slider from "@/components/Friends/Slider.vue"


export default defineComponent({
    name: 'Friends',
    components: {
        FriendCard,
        Slider

    }
})
</script>

<style scoped>
.container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}
</style>