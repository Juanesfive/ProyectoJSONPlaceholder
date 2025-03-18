// Aqui estoy importando el archivo barril principal que contiene todos los módulos
import { tareas, usuarios, posts } from './Modulos/index.js';

// Aqui estoy Definiendo la función que muestra el menú y ejecuta la opción seleccionada por el usuario
async function mostrarMenu() {
  // Aqui Defino el mensaje del menú con las opciones.
  const menu = `Selecciona una opción:
1. Listar tareas pendientes por usuario
2. Buscar usuario y sus álbumes/fotografías
3. Filtrar posts y agregar comentarios
4. Modificar la respuesta de la consulta de usuarios
5. Agregar información de usuarios
0. Salir
Ingresa el número de la opción:`;
  
  // Aqui solicito al usuario la opción mediante prompt
  const opcion = prompt(menu);
  
  // Aqui estoy Evaluando la opción ingresada y segun la opcion elegida llamo a la función correspondiente
  switch (opcion) {
    case '1':
      await tareas.listarTareas();
      break;
    case '2':
      await usuarios.buscarUsuarioAlbumsFotos();
      break;
    case '3':
      await posts.filtrarPostsComentarios();
      break;
    case '4':
      await usuarios.modificarRespuestaUsuarios();
      break;
    case '5':
      await usuarios.AgregarInformacionUsuarios();
      break;
    case '0':
      // Aqui estoy informando que se sale del menú y se termina la ejecución
      console.log('Saliendo del menú, Gracias por usar el programa.');
      return;
    default:
      // Aqui estoy informando al usuario que la opción ingresada no es válida
      console.log('Opción no válida. Por favor, intenta de nuevo.');
      break;
  }

    // Aqui vuelvo a llamar a la función para que se muestre nuevamente el menú
    mostrarMenu();
}

// Aqui estoy Llamando a la función para mostrar el menú.
mostrarMenu();
