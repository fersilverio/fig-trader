<template>
    <nav class="navbar navbar-expand-lg" style="width: 100%;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link active" aria-current="page"
                            href="#">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <a  @click="logout" class="nav-link active" aria-current="page" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/store/user"
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Navbar',

    setup(){
        const userStore = useUserStore()
        const router = useRouter()
        
        const logout = () => {
            userStore.signOut()
            router.push('/login')    
        }

        return { logout }
    }
})
</script>

<style></style>