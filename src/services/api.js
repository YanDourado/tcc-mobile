import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
    baseURL: 'http://192.168.15.8/api'
});

api.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem('@tcc:token');  

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // TODO: DESLOGAR O USUÁRIO
});

export default api;