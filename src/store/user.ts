import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore("user", {
    state: () => ({
        accessToken: null,
        userId: null,
        userName: ""
    }),

    actions: {
        async signIn(email: string, password: string) {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password
            })

            this.accessToken = response.data.accessToken
            this.userId = response.data.userId
            this.userName = response.data.userName
            
        }
    },

    getters: {
        isAuthenticated: (state) => (state.accessToken) ? true : false
    }

})