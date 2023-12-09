# Endpoint: `POST /cuestionarios/`

Crea una nueva entrada para un cuestionario con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `asignatura` (obligatorio): Asignatura del cuestionario.
- `pregunta` (obligatorio): Pregunta del cuestionario.
- `respuesta` (obligatorio): Respuesta del cuestionario.


**Ejemplo:**
```http
POST /cuestionarios/
Content-Type: application/json
```
```json
{
  "asignatura": "Matemáticas",
  "pregunta": "¿Cuánto es 2 + 2?",
  "respuesta": "4"
}
```
## Respuesta Exitosa (Código 201 Created)
```json
{
    "status": 201,
    "message": "Created",
    "idJugador": 1
}
```
## Respuestas de Errores Posibles
- Código 400 Bad Request:
```json
{ "error": 400, "error": "Bad Request" }
```
- Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
}
```

## Notas Adicionales
- Ten en cuenta la estructura de la tabla de usuarios en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar los parámetros requeridos para crear un nuevo jugador.
Los campos idDif y idPuntos son opcionales y pueden ser proporcionados si se desea asociar el jugador con una dificultad y puntos específicos. Ajusta según tus necesidades específicas.