<template>
    <div class="container-fluid fundo" style="margin-top: 15vh;">

        <div class="row" style="">
            <div class="col-md-3">
                <div class="card" style="width: 18rem; margin-bottom: 10px;">
                    <img src="@/assets/barkeep_carlfrankdotcom_by_seeeffeye_d95gy6k-fullview.jpg" class="card-img-top"
                        alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">@{{ nickName }}</h6>
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
                <div class="row" style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content. <br>
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <figure class="figure">
                                <img src="@/assets/desenhos-de-escudos-2-3.jpg" class="figure-img img-fluid rounded"
                                    alt="...">
                                <figcaption class="figure-caption">A caption for the above image.</figcaption>
                            </figure>
                        </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content. <br>
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
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
import * as dayjs from 'dayjs'

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
        const nickName = ref('')

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

            console.log(profileInfo)

            name.value = profileInfo.data.name
            email.value = profileInfo.data.email
            creationDate.value = profileInfo.data.createdAt
            nickName.value = profileInfo.data.nickName
        }

        return { name, email, creationDate, nickName, getProfile }
    }
})
</script>

<style>
.fundo {
    background-color: rgb(248, 248, 248);
}
</style>