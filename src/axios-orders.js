import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-react-7820.firebaseio.com/'
});

export default instance