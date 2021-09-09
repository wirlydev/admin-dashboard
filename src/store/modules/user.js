import appSettings from "../../appSettings.js";
import axios from "axios";
import router from "../../router"

export default {
  namespaced: true,
  state: {
    token: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
  },
  mutations: {
    updateToken: (state, payload) => {
        state.token = payload
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .post(`${appSettings.apiBaseUrl}/login`, credentials, {
          headers: { "access-token": appSettings.apiKey },
        })
        .then((response) => {
          if (
            response.data.success &&
            response.data.token !== null &&
            response.data.token !== ""
          ) {
                commit("updateToken", response.data.token)  
          }
          return response;
        });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("updateToken", null)
        router.push({name: 'login'});
      });
    },
  },
};
