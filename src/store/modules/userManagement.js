import appSettings from '../../appSettings.js'
import httpClient  from '../../services/api/httpClient.js';

export default {
    namespaced : true, 
    state: {
        users: []
    },
    getters: {
    }, 
    mutations: {
        setUsers(state, users){
            state.users = users;
        }
    },
    actions: {
        getUsers({commit}){
            return httpClient.client().get(`${appSettings.apiBaseUrl}/users`)
            .then(response => {
                commit("setUsers", response.data);
            })        
        } 
    }
}