import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'

export const useUserStore = defineStore("user", {
    state: () => ({
        accessToken: Cookies.get('accessToken') || null
    }),

    actions: {

        // setToken(accessToken: any){
        //     this.accessToken = accessToken
        //     Cookies.set('accessToken', accessToken, {expires: 1})
        // },

        // removeToken(){
        //     this.accessToken = null
        //     Cookies.remove('accessToken')
        // },

        async signIn(email: string, password: string) {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password
            })

            this.accessToken = response.data.accessToken

            Cookies.set('accessToken', response.data.accessToken, { expires: 1 })

        },

        signOut(){
            this.accessToken = null
            Cookies.remove('accessToken')
        }
    },

    getters: {
        isAuthenticated: (state) => (state.accessToken) ? true : false
    }

})