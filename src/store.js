import { createStore } from 'vuex'
import http from './http/axios'
import axios from 'axios'
export default createStore({
  state: {
    token: null,
    user: null
  },

  mutations: {
    SET_AUTHENTICATED(state, { token, user }) {
      state.token = token
      state.user = user
    },

    DEAUTHENTICATE_USER(state) {
      state.token = null
      state.user = null
    }

  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        console.log('action atingida')
        axios.post('http://localhost:3000/auth/login', { email, password }).then((res) => {
          console.log('waw')
          console.log(res)
        }).catch((err) => { 
          alert(err) 
          console.error(err) 
        })
        
        
        // http.post('auth/login', user)
        //   .then(res => {
        //     commit('SET_AUTHENTICATED', {
        //       token: res.data.access_token,
        //       user: res.data.user
        //     })
        //     resolve(res.data)
        //   })
        //   .catch(err => {
        //     //alert(err)
        //     console.error(err)
        //     reject(err)
        //   })
      })
    },

    logout({ commit }) {
      commit('DEAUTHENTICATE_USER')
    }
  },

  getters: {
    isAuthenticated: state => Boolean(state.token)
  }

})
