// Aqui estoy importando los módulos desde cada subcarpeta a través de sus archivos barril
import * as tareas from './Tareas/index.js';
import * as usuarios from './Usuarios/index.js';
import * as posts from './posts/index.js';

// Aqui estoy exportando todos los módulos para que estén disponibles en el archivo app.js
export { tareas, usuarios, posts };
