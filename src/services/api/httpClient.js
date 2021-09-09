import axios from 'axios';
import store from '@/store';
import appSettings from "../../appSettings.js";

export default {
    client : function(){
        var apiClient = axios.create({
            baseURL: appSettings.apiBaseUrl,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${store.state.user.token}`}
        });

        apiClient.interceptors.response.use(response => { return response },
            error => {
                if (error.response === undefined) {
                    store.dispatch("displayNotificationModal", {
                        title: "Offline",
                        content: "It appears you are offline. Please reconnect and try again."
                    });
                } else if (error.response.status === 401) {
                    window.location = '/login?expired=true';
                    return Promise.reject(error);
                } else if (error.response.status >= 500) {
                    store.dispatch("displayNotificationModal", {
                        title: "An Error Occurred",
                        content: "An error occurred processing your request. Support has been notified. Please try again later."
                    });
                    //alert(JSON.stringify(error.response.data));
                    return Promise.reject(error);
                } else {
                    return error;
                }
            });
        return apiClient;
    } 
}
