<template>
    <div class="container-fluid" style="margin: 20px;">
        
        <div class="row" style="background-color: blue;">
            <div class="col-md-3">
                <div class="card" style="width: 18rem; margin-bottom: 10px;">
                    <img src="@/assets/GuardiaoCelta.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Fernando S. Silvério</h5>
                        <h6 class="card-subtitle mb-2 text-muted">@questbarman</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>FullName</td>
                            <td>{{ name }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{ email }}</td>
                        </tr>
                        <tr>
                            <td>CreationDate</td>
                            <td>{{ creationDate }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row" style="display: flex; flex-direction: row; justify-content: space-evenly;">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        
        
        
    </div>
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