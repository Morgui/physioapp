# PhysioApp

Aplicación para la gestión de negocio de fisioterapia con React, Node, Express y MongoDB

## Endpoints server

| Id | Method | Path | Description |
|----|--------|------|-------------|
| 1 | get | /appointment | Listado de citas|
| 2 | get | /appointment/:id | Detalle de citas|
| 3 | post | /appointment | Alta de citas|
| 4 | put | /appointment/:id| Editar citas|
| 5 | delete | /appointment/:id| Cancelar citas|
| 6 | get | /patient | Listado de pacientes|
| 8 | get | /patient/:id | Expediente paciente|
| 9 | put | /patient/:id | Editar historial|

## Pasos a seguir de endpoints en client (react)

- en la carpeta pages, crear componentes que seran las paginas:

- /admin (una vez logueado al profesional se le debe redireccionar directamente) Componente adminIndex: debe aparecerle un resumen de las citas del día (Switchs con subrutas?)

- /admin/appointments (para listar las citas del día y posteriores)

- /admin/patients (para acceder al listado de pacientes) tendría un search para filtrar la búsqueda //Componente patientsList

- /admin/patients/:id (acceder a la ficha del paciente) Componente PatientDetails

- Crear Home para la pagina principal:

- Crear pagina de servicios y tarifas (?)
