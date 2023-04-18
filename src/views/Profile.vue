<template>
    <div class="fundo">
        <Navbar />
        <div class="row">
            <div class="col offset-md" style="">
                <div>
                    <div v-if="renderOption == 1">
                        <Dashboard />
                    </div>
                    <div v-else-if="renderOption == 2">
                        <Slider />
                    </div>
                    <div v-else>
                        <Deck />
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <Sidebar @sidebar-choice="listenOptionEvent" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue"
import Sidebar from '@/components/Sidebar.vue'
import Dashboard from '@/components/Dashboard.vue'
import Friends from '@/components/Friends/Friends.vue'
import Deck from '@/components/Deck.vue'
import Navbar from "@/components/Navbar.vue"
import Slider from "@/components/Friends/Slider.vue"

export default defineComponent({
    name: 'Profile',
    components: {
    Sidebar,
    Dashboard,
    Friends,
    Deck,
    Navbar,
    Slider
},

    setup() {
        const renderOption = ref(1)
        const listenOptionEvent = (option: number) => {
            renderOption.value = option
        }

        return { renderOption, listenOptionEvent }
    }

})
</script>

<style>
.fundo {
    background-color: rgb(248, 248, 248);
}
</style>