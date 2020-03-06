# PhysioApp

## Endpoints servidor

| Id | Method | Path | Description |
|----|--------|------|-------------|
| 1 | get | /appointment | Listado de citas|
| 2 | get | /appointment/:id | Detalle de citas|
| 3 | post | /appointment | Alta de citas|
| 4 | put | /appointment/:id| Editar citas|
| 5 | delete | /appointment/:id| Eliminar citas|
| 6 | get | /patient | Listado de pacientes|
| 8 | get | /patient/:id | Expediente paciente|
| 9 | post | /patient | Crear expediente|
| 10 | put | /patient/:id | Editar expediente|
| 11 | delete | /patient/:id | Eliminar expediente|


## Paso a seguir en el server 

- Ya esta creado el formulario modal en cliente, ahora el servidor tiene que recibir esos datos y buscar el paciente o crearlo si no existiera y crear la cita relacionándola con los datos del paciente.

- *TODO a futuro: Endpoint que devuelva la lista de horas disponibles de un día en concreto (de momento va devolver la misma lista)

- *TODO: Crear un filtro en el listado de citas para que no devuelva las viejas por defecto. Usando un query para que devuelva las citas antiguas para mostrarlas en las graficas.

## Pasos a seguir de endpoints en client (react)

- en la carpeta pages, crear componentes que seran las paginas:

- /admin (una vez logueado al profesional se le debe redireccionar directamente) Componente adminIndex: debe aparecerle un resumen de las citas del día (Switchs con subrutas?)

- /admin/appointments (para listar las citas del día y posteriores)

- /admin/patients (para acceder al listado de pacientes) tendría un search para filtrar la búsqueda //Componente patientsList

- /admin/patients/:id (acceder a la ficha del paciente) Componente PatientDetails

- "para patients hay que crear un service para obtener toda la información relacionada con los pacientes"


- Crear Home para la pagina principal:

- Crear About para página sobre nosotros

- Crear paginas de servicios y tarifas (?)

- *TODO a futuro: En el formulario de pedir cita, el campo de la hora esta inicialmente desactivado hasta que elijas fecha, una vez que la elijas, disparar un evento que pida al servidor las horas disponibles para ese día.
Entonces el servidor debe responder con sólo las disponibles y que estas sean sólo las que le aparezcan al paciente
