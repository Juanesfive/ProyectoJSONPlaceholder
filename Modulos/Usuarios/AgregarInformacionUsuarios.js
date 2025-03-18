export async function AgregarInformacionUsuarios() {
  try {
    // Aqui estoy realizando la petición a la API para obtener la lista de usuarios
    console.log("Obteniendo usuarios...");
    const respuestaUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Aqui estoy verificando si la respuesta de usuarios fue exitosa.
    if (!respuestaUsuarios.ok)
      throw new Error(`Error en la petición de usuarios. Código: ${respuestaUsuarios.status}`);
    
    // Aqui estoy transformando la respuesta a formato JSON.
    const usuarios = await respuestaUsuarios.json();
    
    // Aqui estoy recorriendo sobre cada usuario para agregar sus posts y álbumes.
    for (let i = 0; i < usuarios.length; i++) {
      let usuario = usuarios[i];
      
      // Aqui estoy realizando la petición para obtener los posts del usuario actual.
      console.log(`Obteniendo posts para el usuario ${usuario.id}...`);
      const respuestaPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);
      
      // Aqui verifico si la respuesta de posts fue exitosa.
      if (!respuestaPost.ok)
        throw new Error(`Error en la petición de posts para el usuario ${usuario.id}. Código: ${respuestaPost.status}`);
      
      // Aqui estoy transformando la respuesta a formato JSON.
      const posts = await respuestaPost.json();
      
      // Aqui estoy recorriendo sobre cada post para obtener y agregar sus comentarios.
      for (let j = 0; j < posts.length; j++) {
        let post = posts[j];
        
        // Aqui estoy realizabdo la petición para obtener los comentarios del post actual.
        console.log(`Obteniendo comentarios para el post ${post.id}...`);
        const respuestaComentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        
        // Aqui estoy verificando si la respuesta de comentarios fue exitosa.
        if (!respuestaComentarios.ok)
          throw new Error(`Error en la petición de comentarios para el post ${post.id}. Código: ${respuestaComentarios.status}`);
        
        // Aqui estoy transformando la respuesta de comentarios a formato JSON.
        const comentarios = await respuestaComentarios.json();
        
        // Aqui Agrego a la lista de comentarios al post actual.
        post.comentarios = comentarios;
      }
      
      // Aqui estoy asignando la lista de posts agregados al usuario actual.
      usuario.posts = posts;
      
      // Aqui estoy realizando la petición para obtener los álbumes del usuario actual.
      console.log(`Obteniendo álbumes para el usuario ${usuario.id}...`);
      const respuestaAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
      
      // Aqui estoy verificando si la respuesta de álbumes fue exitosa.
      if (!respuestaAlbums.ok)
        throw new Error(`Error en la petición de álbumes para el usuario ${usuario.id}. Código: ${respuestaAlbums.status}`);
      
      // Aqui estoy transformando la respuesta de álbumes a formato JSON.
      const albums = await respuestaAlbums.json();
      
      // Aqui estoy recorriendo sobre cada álbum para obtener y agregar sus fotografías.
      for (let A = 0; A < albums.length; A++) {
        let album = albums[A];
        
        // Aqui estoy realizando la petición para obtener las fotos del álbum actual.
        console.log(`Obteniendo fotos para el álbum ${album.id}...`);
        const respuestaFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        
        // Aqui estoy verificando si la respuesta de fotos fue exitosa.
        if (!respuestaFotos.ok)
          throw new Error(`Error en la petición de fotos para el álbum ${album.id}. Código: ${respuestaFotos.status}`);
        
        // Aqui estoy transformando la respuesta de fotos a formato JSON.
        const fotos = await respuestaFotos.json();
        
        // Aqui estoy agregando la lista de fotos al álbum actual.
        album.fotos = fotos;
      }
      
      // Aqui estoy asignando la lista de álbumes agregados al usuario actual.
      usuario.albums = albums;
    }
    
    // Aqui estoy imprimiendo en consola la información completa de los usuarios agregados.
    console.log('Usuarios Agregados:', usuarios);
  } catch (error) {
    // Aqui estoy capturando e imprimiendo cualquier error ocurrido durante el proceso.
    console.error('Error al enriquecer la información de usuarios:', error);
  }
}


  
  