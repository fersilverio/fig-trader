<template>
    <div class="" style="">
        <FriendCard />
        <!-- <FriendCard />
        <FriendCard />
        <FriendCard /> -->
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
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    height: 100%;
    /* background-color: red; */
}
</style>