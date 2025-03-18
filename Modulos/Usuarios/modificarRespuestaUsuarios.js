export async function modificarRespuestaUsuarios() {
    try {
      // Aqui estoy realizando la petición para obtener todos los usuarios
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuesta.ok) throw new Error('Error en la petición de usuarios');
      const usuarios = await respuesta.json();
      // Aqui modifico la respuesta para incluir únicamente nombre y teléfono de cada usuario
      const usuariosModificados = usuarios.map(user => {
        return {
          nombre: user.name,
          telefono: user.phone
        };
      });
      // Aqui imprimo el nuevo arreglo de usuarios modificados
      console.log('Usuarios (nombre y teléfono):', usuariosModificados);
    } catch (error) {
      // Y Aqui Capturo e imprimo cualquier error ocurrido durante la petición.
      console.error('Error al modificar respuesta de usuarios:', error);
    }
  }
  