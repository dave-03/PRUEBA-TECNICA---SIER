# Prueba-Tecnica SIER

# Descripción 
Aplicación web creada en React.js para el montaje de una tabla de datos solicitado a un servicio API REST, incorporando diversas funcionalidades para filtrar, editar, agregar y organizar los datos obtenidos del Backend.  Se utilizaron tecnologías de Frontend tales como REACT, Material UI, Hooks, React Router y Axios para las peticiones asíncronas. 

# Contenido 
Este proyecto tiene una sola rama, en las cuales se encontrarán los archivos para su despliegue e inizialización. 

# Demostración 
Se desplegó el proyecto en los servidores de Netlify  <a href="https://prismatic-dusk-74813f.netlify.app/">Demostración del Proyecto</a>

# Instalación 
Correr el siguiente comando en la terminal 

### `npm start`

La aplicación se abrira en un ambiente de desarrollo en tu navegar desde (http://localhost:3000)

La página y el Virtual DOM se actualizarán tan pronto detecte un cambio en la rama.
Los errores se podrán visualizar en la consola/terminal. 

# Errores 
- Al hacer la petición 'DELETE' con ayuda de axios a la API https://jsonplaceholder.typicode.com/posts/1 , aunque se ejecutaba con satisfacción la petición (Status Code: >200 ), el servidor no actualiza los datos impidiendo visualizar el evento eliminar:

<img src="https://i.imgur.com/A0yfkFg.jpg" /> 
- Al hacer la petición 'POST' para actualizar y añadir un recurso en la API, aunque se ejecuta con satisfacción la petición (Status Code: >200 ), el servidor no actualiza los recursos. Se renderizará el primer post que se guarde, puesto que este queda guardado en el estado del componente con ayuda de Hooks. 

<img src="https://i.imgur.com/xLU0WIp.jpg" />


# Instrucciones de Eventos

- Para el filtrado y organización, pasar el mouse por alguna columna para obtener las distintas formas de despliegue de la información. 
- Para actualizaciones, hacer doble click en el texto que se desea cambiar. 
- Para añadir un nuevo post, referirte al botón "Añadir un nuevo Post" y rellenar el formulario para su inicialización en la tabla de datos. 
- Para eliminar un post, referirse al botón "x". 
- Para observar los comentarios, referirse al botón "Ver Comentarios" el cual desplegará los comentarios en una nueva tabla de datos. 
- La paginación y navegación se puede lograr al dar click en las flechas de la parte inferior de la tabla de datos. Utilice "<" para retroceder y ">" para acceder a la   siguiente página de datos. 

# Previsualización 

<img src="https://i.imgur.com/F2HvKXC.jpg" />




### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
