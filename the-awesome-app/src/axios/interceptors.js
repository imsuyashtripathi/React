import axios from 'axios';
import {store} from '../state/redux/store';

axios.interceptors.request.use((config)=>{
    const loginUrl=process.env.REACT_APP_BASE_URL+"/login";
    if(config.url!== loginUrl && config.url.startsWith(process.env.REACT_APP_BASE_URL)){
        const state =store.getState();
        config.headers.Authorization ="Bearer "+state.auth.accessToken;
    }
    return config;
})