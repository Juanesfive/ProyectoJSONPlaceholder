export async function buscarUsuarioAlbumsFotos() {
    try {
      // Aqui estoy solicitanto al usuario el username mediante prompt
      const username = prompt('Ingresa el username a buscar:');
      
      // Aqui estoy Realizando la petición para obtener todos los usuarios
      const respuestaUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuestaUsuarios.ok) throw new Error('Error en la petición de usuarios');
      const usuarios = await respuestaUsuarios.json();
      
      // Aqui estoy buscando el usuario cuyo username coincida  y haciendo uso del 
      // ".toLowerCase()" para que no haya problemas de distinguir mayúsculas o minúsculas.
      let usuario = null;
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username.toLowerCase() === username.toLowerCase()) {
          usuario = usuarios[i];
          break;
        }
      }
      if (!usuario) {
        console.log('Usuario no encontrado');
        return;
      }
      
      // Aqui estoy imprimiendo los datos del usuario encontrado
      console.log('Datos del usuario:', usuario);
      
      // Aqui estoy realizando la petición para obtener los álbumes del usuario
      const respuestaAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
      if (!respuestaAlbums.ok) throw new Error('Error en la petición de álbumes');
      const albums = await respuestaAlbums.json();
      
      // Aqui estoy que por cada álbum, obtengo las fotografías correspondientes.
      for (let i = 0; i < albums.length; i++) {
        let album = albums[i];
        // Aqui realizo la petición para obtener las fotos del álbum actual
        const respuestaFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        if (!respuestaFotos.ok) throw new Error('Error en la petición de fotos');
        const fotos = await respuestaFotos.json();
        // Aqui Agrego las fotos al objeto álbum
        album.fotos = fotos;
      }
      
      // Aqui imprimo los álbumes junto con sus fotografías
      console.log('Álbumes y fotografías del usuario:', albums);
    } catch (error) {
      // Y aqui capturo e imprimo cualquier error ocurrido durante las peticiones
      console.error('Error en búsqueda de usuario y álbumes:', error);
    }
  }
  