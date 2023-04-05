<template>
    {{ name }}
    {{ email }}
    {{ creationDate }}
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { useUserStore } from "@/store/user"
import Cookies from "js-cookie"

export default defineComponent({
    name: 'Dashboard',

    created() {
        this.getProfile()
    },

    setup() {
        const userStore = useUserStore()

        const name = ref('')
        const email = ref('')
        const creationDate = ref('')

        const getProfile = async () => {
            const token = Cookies.get('accessToken')
            let userId
            
            if (token) {
                const payload: any = jwtDecode(token)
                userId = payload.id                
            }

            const profileInfo: any = await axios.get(`http://localhost:3000/users/get-profile/${userId}`, {
                headers: {
                    Authorization: `Bearer ${userStore.accessToken}`
                }
            })

            name.value = profileInfo.data.userName
            email.value = profileInfo.data.userEmail
            creationDate.value = profileInfo.data.creationDate
        }

        return { name, email, creationDate, getProfile }
    }
})
</script>

<style></style>