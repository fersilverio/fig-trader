<template>
    <div>
        <Navbar />
        <h1>Parabens sou uma home page, prazer {{ userName}}!!</h1>
    </div>
</template>

<script lang="ts">
import { useUserStore } from "@/store/user"
import { defineComponent, ref } from "vue";
import Cookies from "js-cookie"
import jwtDecode from 'jwt-decode'
import Navbar from "@/components/Navbar.vue";
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "Home",
    created() {
        this.getName()
    },
    setup() {
        const userStore = useUserStore();
        const token = Cookies.get("accessToken")
        const router = useRouter()
        let userName = ref("")

        const getName = () => {
            if (token) {
                const payload: any = jwtDecode(token)
                userName.value = payload.name;
            }
            else {
                router.push('/login')
            }
        }
        return {
            userStore,
            getName,
            userName
        };
    },
    components: { Navbar }
})
</script>

<style></style>