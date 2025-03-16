export async function listarTareas() {
    try {
      // Aqui estoy realizando la petición a la API para obtener todas las tareas
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      // Aqui estoy Verificando si la respuesta es correcta
      if (!response.ok) throw new Error('Error en la petición de tareas');
      // Aqui Convierto la respuesta a formato JSON
      const todos = await response.json();
      // Aqui estoy filtrando las tareas pendientes (completed == false)
      const tareasPendientes = todos.filter(todo => !todo.completed);
      // Aqui agrupo las tareas pendientes por usuario por el (userId)
      const tareasPorUsuario = {};
      tareasPendientes.forEach(todo => {
        // Aqui lo que estoy haciendo es que si no existe el usuario en el objeto, lo inicializo en un array vacio
        if (!tareasPorUsuario[todo.userId]) {
          tareasPorUsuario[todo.userId] = [];
        }
        // Aqui estoy agregando la tarea pendiente al grupo del usuario correspondiente
        tareasPorUsuario[todo.userId].push(todo);
      });
      // Aqui estoy imprimiendo en consola las tareas pendientes agrupadas por usuario
      console.log('Tareas pendientes por usuario:');
      for (const userId in tareasPorUsuario) {
        console.log(`Usuario ${userId}:`, tareasPorUsuario[userId]);
      }
    } catch (error) {
      // Aqui estoy imprimiendo cualquier error ocurrido durante la petición
      console.error('Error al listar tareas:', error);
    }
  }
  
  