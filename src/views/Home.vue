<template>
    <h1>Parabens sou uma home page, prazer usuario de token: {{ userStore.accessToken}}</h1>
    <router-link to="/profile">profile</router-link>
</template>

<script lang="ts">
import { useUserStore } from "@/store/user"
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Home',

    setup() {
        const userStore = useUserStore()

        // acessando accessToken
        console.log(userStore.accessToken)

        return {
            userStore,
        }
    },
})
</script>

<style></style>