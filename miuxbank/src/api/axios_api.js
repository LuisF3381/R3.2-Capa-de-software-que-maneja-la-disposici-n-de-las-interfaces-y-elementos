import axios from 'axios';

export const listar_usuarios = () =>{
    return axios.get(process.env.REACT_APP_API_URL + '/usuarios');
}