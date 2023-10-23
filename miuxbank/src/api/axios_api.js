import axios from 'axios';

export const listar_usuarios = () =>{
    return axios.get(process.env.REACT_APP_API_URL + '/listar_usuarios');
}

const apiUrlPers = 'http://127.0.0.1:8002';


// APIS DE USER MODEL
export const getUserModelIdByIdUsuario = (idUsuario) => {
    return axios.get(`${apiUrlPers}/user-model/by-id-usuario/${idUsuario}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al obtener el idUserModel:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};


export const getPerfilByIdUserModel = (idUserModel) => {
    return axios.get(`${apiUrlPers}/user-model/${idUserModel}/perfil`)
      .then(response => response.data)
      .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al obtener el perfil por idUserModel:', error);
        throw error; // Puedes manejar el error de otras formas según tus necesidades
      });
  };




// APIS PARA OBTENER RUTAS

export const getObtenerRutaPostLogin = (userModelId) => {
    return axios.get(`${apiUrlPers}/obtener-ruta/login/${userModelId}`)
      .then(response => response.data)
      .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al obtener la ruta después del login:', error);
        throw error; // Puedes manejar el error de otras formas según tus necesidades
      });
  };



