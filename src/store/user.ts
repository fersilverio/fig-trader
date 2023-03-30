import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore("user", {
    state: () => ({
        accessToken: null
    }),

    actions: {
        async signIn(email: string, password: string) {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password
            })

            this.accessToken = response.data.accessToken
        }
    },

    getters: {
        isAuthenticated: (state) => (state.accessToken) ? true : false
    }

})