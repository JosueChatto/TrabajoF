# Endpoint: `GET /cuestionario/{idCuest}`

Obtiene la información específica de un cuestionario.

## Parámetros de URL
- `{idCuest}` (obligatorio): Identificador único del cuestionario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /cuestionario/1
```

## Respuesta Exitosa (Código 200 OK)
- json
- Copy code
```json
{"idCuest":1,"asignatura":"Matemáticas","pregunta":"¿Cuánto es 2 + 2?","respuesta":"4"}
```

## Respuestas de Errores Posibles
Código 404 Not Found:

```json
Copy code
{"error":"Not found"}
```
Código 500 Internal Server Error:

```json
Copy code
{
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
```
Notas Adicionales
Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre un cuestionario en específico.