export async function filtrarPostsComentarios() {
    try {
      // Aqui estoy solicitando al usuario el nombre a buscar en el título de los posts mediante prompt
      const nombre = prompt('Ingresa el nombre a buscar en el título de los posts:');
      // Aqui estoy realizando la petición para obtener todos los posts
      const respuestaPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!respuestaPosts.ok) throw new Error('Error en la petición de posts');
      const posts = await respuestaPosts.json();
      // Aqui estoy filtrando los posts que contengan el nombre en su título y hago uso de ".toLowerCase " para que no distinguir mayúsculas o minúsculas)
      const postsFiltrados = posts.filter(post => post.title.toLowerCase().includes(nombre.toLowerCase()));
      // Aqui por cada post filtrado, obtengo y agrego sus comentarios
      for (let i = 0; i < postsFiltrados.length; i++) {
        let post = postsFiltrados[i];
        // Aqui estoy realizando la petición para obtener los comentarios del post
        const respuestaComentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        if (!respuestaComentarios.ok) throw new Error('Error en la petición de comentarios');
        const comentarios = await respuestaComentarios.json();
        // Aqui estoy Agregando los comentarios al post
        post.comentarios = comentarios;
      }
      // Aqui Imprimo en consola los posts filtrados junto a sus comentarios
      console.log('Posts filtrados y con comentarios:', postsFiltrados);
    } catch (error) {
      // Y Aqui Capturo e imprimo cualquier error ocurrido durante las peticiones
      console.error('Error al filtrar posts y agregar comentarios:', error);
    }
  }
  
  