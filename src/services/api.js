import axios from 'axios';
import { AsyncStorage } from 'react-native';

import constants from '../utils/constants'

const api = axios.create({
    baseURL: `${constants.HOST}/api`
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