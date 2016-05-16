# Sistema de Notifacion de Eventos de Jail o sisne.

Es un sistema que te permite rastrear todos los eventos cercanos a ti asi como a los que te gustaria asistir y no perderte la diversion.

Primero empezare definiendo el modelado de datos.

Evento: nombre, fecha del evento, fecha de creacion, lugar, duracion, descripcion, categoria, admision, cupo, reservación, precio.
Usuario: nombre, email, contraseña.

Rutas:

GET /command
POST /command/event

POST /login
POST /register
POST /recover_password

GET /dashboard
GET /dashboard/profile
PUT /dashboard/profile

GET /search?params

POST /event
GET /event

