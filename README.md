# PhysioApp

PhysioApp es el proyecto final que realicé en el [bootcamp de Full Stack Web Dev en Ironhack](https://www.ironhack.com/es/desarrollo-web). Después de completar nuestra formación en React, Node, Javascript,..., tuvimos dos semanas para desarrollar una Single Page Aplication. 

### Funcionamiento

Se trata de una aplicación para la gestión de negocio de fisioterapia, donde los clientes pueden pedir cita y el profesional puede gestionar dichas citas y llevar un control sobre estas, además de poder gestionar los expedientes y tener un control sobre las estadísticas de las citas canceladas y realizadas en el último mes.

![Intranet Admin](server/images_capture/intranet_admin.png)

### Arrancar el proyecto

El proyecto se encuentra dividido en dos carpetas, client y server.

Para iniciar el proyecto, debe crear primero un archivo .env dentro de server, que contenga:

```
PORT=5000
```

Y otro .env en client, que indique:

```
PORT=3000
REACT_APP_URL=http://localhost:5000/api
```

Para iniciar el server, use los comandos:

```
npm install
npm run dev
```

Y para iniciar el client:

```
npm install 
npm start
```

O puedes ver una versión del proyecto en el siguiente [enlace](https://project-physio-app.herokuapp.com/)

### Realizado con

Este proyecto ha sido realizado con React, Node, Express y MongoDB.