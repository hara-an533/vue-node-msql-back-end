import axios from 'axios'


//配置
axios.defaults.baseURL='http://localhost:3130/'

//配置头部
import store from '../store/index'
 
// axios.defaults.baseURL = '/data/'
axios.defaults.baseURL = 'http://localhost:3130/'
axios.defaults.timeout = 20000
axios.defaults.headers['Content-Type'] = 'application/json'
 
axios.interceptors.request.use(
    config => {
        config.headers['Token'] = store.state.token;
        return config;
    },
    error => {
        return error;
    }
);
 
axios.interceptors.response.use(
    data => {
        return data;
    },
    error => {
        return error;
    }
);
export default axios;
