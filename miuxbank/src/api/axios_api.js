import axios from 'axios';



const apiUrlUsr = 'http://127.0.0.1:8000';  // Reemplaza con la URL de tu servidor FastAPI
//Para el despligue
//const apiUrlUsr = 'http://35.173.254.67:8000';  // Reemplaza con la URL de tu servidor FastAPI

export const listar_usuarios = () =>{
  return axios.get(`${apiUrlUsr}/listar_usuarios`);
  //`${apiUrlUsr}/listar_usuarios`
}

export const getUsuarioById = (idUsuario) => {
  return axios.get(`${apiUrlUsr}/obtiene-usuario/${idUsuario}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al obtener el usuario:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};

export const listarCuentas = (idUsuario) => {
  return axios.get(`${apiUrlUsr}/listar_cuentas/${idUsuario}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al listar cuentas:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};

// Obtengo la informacion de la cuenta en base al CCI 
export const infoCuenta = (CCI) => {
  return axios.get(`${apiUrlUsr}/info-cuenta/?cci=${CCI}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al obtener la informacion de la cuenta:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};


// Para obtener la tarjeta del cliente
export const obtenerTarjeta = (idUsuario) => {
  return axios.get(`${apiUrlUsr}/obtener_tarjeta/${idUsuario}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al obtener la informacion de la tarjeta:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};



//Para el despligue
const apiUrlPers = 'http://127.0.0.1:8002';
//const apiUrlPers = 'http://35.173.254.67:8002';



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


export const get_user_model = (idUserModel) => {
  return axios.get(`${apiUrlPers}/user-model/${idUserModel}`)
  .then(response => response.data)
  .catch(error => {
    // Manejo de errores, por ejemplo, imprimir en la consola
    console.error('Error al obtener el User Model:', error);
    throw error; // Puedes manejar el error de otras formas según tus necesidades
  });
};

// Para obtener el id usuario
export const getIdsuarioByIdUserModel = (idUserModel) => {
    return axios.get(`${apiUrlPers}/user-model/by-id-user-model/${idUserModel}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al obtener el idUsuario:', error);
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

export const actualizarPerfilInformado = (userModelId, updatedData) => {
    return axios.put(`${apiUrlPers}/user-model/${userModelId}/update-perfil-informado`, updatedData)
      .then(response => response.data)
      .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al actualizar perfil informado:', error);
        throw error; // Puedes manejar el error de otras formas según tus necesidades
      });
  };

  export const insertarOperacion = (operacionData) =>{
    return axios.post(`${apiUrlPers}/operacion/insert`, operacionData)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al insertar la operacion:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
  };


export const listarOperacion = (idOperacion) =>{
  return axios.get(`${apiUrlPers}/operacion/${idOperacion}`)
  .then(response => response.data)
  .catch(error => {
    // Manejo de errores, por ejemplo, imprimir en la consola
    console.error('Error al insertar la operacion:', error);
    throw error; // Puedes manejar el error de otras formas según tus necesidades
  });
};

// Se actualiza la constancia de la operacion
export const constanciaOperacion = (idOperacion, constOperacionUpdate) => {
  return axios.put(`${apiUrlPers}/operacion/update/${idOperacion}`, null, {
    params: {
      const_operacion_update: constOperacionUpdate
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al modificar la constancia de operacion:', error);
    throw error;
  });
};


// API PARA OBTENER IDOPERATION MODEL
export const getOperationModel = (idOperationModel) => {
  return axios.get(`${apiUrlPers}/operation_model/${idOperationModel}`)
  .then(response => response.data)
  .catch(error => {
    // Manejo de errores, por ejemplo, imprimir en la consola
    console.error('Error al obtener el operation model:', error);
    throw error; // Puedes manejar el error de otras formas según tus necesidades
  });
};

export const actualizar_user_model = (idUserModel) => {
  return axios.post(`${apiUrlPers}/actualizar_user_model/${idUserModel}`)
  .then(response => response.data)
  .catch(error => {
    // Manejo de errores, por ejemplo, imprimir en la consola
    console.error('Error al actualizar el user model:', error);
    throw error; // Puedes manejar el error de otras formas según tus necesidades
  });
};


export const actualizar_user_model_texto = (idUserModel, tam_letra) => {
  return axios.put(`${apiUrlPers}/user-model/update-tipografia?user_model_id=${idUserModel}&tam_letra=${tam_letra}`)
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al actualizar el user model:', error);
      throw error; // Puedes manejar el error de otras formas según tus necesidades
    });
};

// Actualizar el idioma del user model
export const actualizar_idioma_preferido = (user_model_id, idiomaPreferido) => {
  return axios.put(`${apiUrlPers}/user-model/${user_model_id}/update-idioma`, { idiomaPreferido })
    .then(response => response.data)
    .catch(error => {
      // Manejo de errores, por ejemplo, imprimir en la consola
      console.error('Error al actualizar el idioma preferido:', error);
      throw error;
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

export const getRouteOperacion = async (idOperationModel, idUsuario) => {
    return axios.get(`${apiUrlPers}/obtener-ruta/operacion/?idOperationModel=${idOperationModel}&idUsuario=${idUsuario}`)
      .then(response => response.data)
      .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al obtener la ruta para el idOperacion:', error);
        throw error; // Puedes manejar el error de otras formas según tus necesidades
      });
  };

  // Insertar metrica
  export const insertarMetrica = async (metricaCreate) => {
      return axios.post(`${apiUrlPers}/operacion_tiempo/insert`, metricaCreate)
      .then(response => response.data)
      .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al obtener al insertar la metrica:', error);
        throw error; // Puedes manejar el error de otras formas según tus necesidades
      });
  }; 