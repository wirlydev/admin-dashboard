import appSettings from '../../appSettings.js'
import axios from 'axios';

export default {
    namespaced : true, 
    state: {
        token: null
    },
    getters: {
        isAuthenticated(state){
            return state.token !== null && state.token !== ''
        }
    }, 
    mutations: {
        setToken(state, tokenValue){
            state.token = tokenValue;
        }
    },
    actions: {
        login({ commit }, credentials){
            return axios.post(`${appSettings.apiBaseUrl}/login`, 
                credentials,
                {headers: {'access-token': appSettings.apiKey}})
            .then(response => {
                if(response.data.success && response.data.token !== null && response.data.token !== ''){
                    commit('setToken', response.data.token);
                    return response;
                }
            })        
        } 
    }
}