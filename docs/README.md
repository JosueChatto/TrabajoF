# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.
## Descripción General de Endpoints

| Recurso                                        | Descripción |
| ---------------------------------------------- | ----------- |
| `GET /usuarioj`                                | Recupera la lista de todos los jugadores registrados. |
| [`GET /usuarioj/{id}`](./endpoints/get-usuarioj-id.md) | Obtiene información detallada sobre un jugador en específico. |
| [`POST /usuarioj/`](./endpoints/post-usuarioj.md) | Crea un nuevo usuario con la información proporcionada. |
| [`PATCH /usuarioj/{id}`](./endpoints/patch-usuarioj.md) | Actualiza la información de un usuario específico. |
| `GET /cuestionario`                                   | Recupera la lista de todas las preguntas a realizar. |
| [`GET /cuestionario/{id}`](./endpoints/get-cuestionario-id.md) | Obtiene información destallasdas de las preguntas que se realizán |
| [`POST /cuestionario/`](./endpoints/post-cuestionario.md)    | Crea una nueva pregunta para adicional. |
| [`PATCH /cuestionario/{id}`](./endpoints/patch-cuestionario.md) | Actualiza la pregunta añadida. |
| `GET /dificultad`                                | Recupera la lista de las dificultades de juego. |
| [`GET /dificultad/{id}`](./endpoints/get-dificultad-id.md) | Obtiene infomacion de las distintas dificultades juego |
| [`POST /dificultad/`](./endpoints/post-dificultad.md) | Crea una dificultad para los distintos niveles. |
| [`PATCH /dificultad/{id}`](./endpoints/patch-dificultad.md) | Actualiza la información de las dificultades. |
| `GET /puntosProg`                          | Recupera la lista de todos los marcadores disponibles. |
| [`GET /puntosProg/{id}`](./endpoints/get-puntosProg-id.md) | Obtiene información del progreso del jugador. |
| [`POST /puntosProg/`](./endpoints/post-puntosProg.md) | Crea un nuevo puntaje con la informacion obtenida. |
| [`PATCH /puntosProg/{id}`](./endpoints/patch-puntosProg.md) | Actualiza la información del puntaje de los usuarios. |