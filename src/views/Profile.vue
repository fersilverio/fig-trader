<template>
    <div class="row">
        <div class="col offset-md" style="background-color: red;">
            <div>
                <div v-if="renderOption == 1">
                    <Dashboard />
                </div>
                <div v-else-if="renderOption == 2">
                    <Friends />
                </div>
                <div v-else>
                    <Deck />
                </div>
            </div>

        </div>
        <div class="col-md-2">
            <Sidebar @sidebar-choice="listenOptionEvent"/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Dashboard from '@/components/Dashboard.vue'
import Friends from '@/components/Friends.vue'
import Deck from '@/components/Deck.vue'

export default {
    name: 'Profile',
    components: {
        Sidebar,
        Dashboard,
        Friends,
        Deck
    },

    data() {
        return {
            renderOption: 1
        }
    },

    methods: {
        listenOptionEvent(option) {
            this.renderOption = option
        }

    },


    setup() {

    }
}
</script>

<style></style>