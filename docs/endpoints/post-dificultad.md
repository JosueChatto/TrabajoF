
# Endpoint: `POST /dificultades/`

Crea una nueva entrada para una dificultad con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `nivelDificultad` (obligatorio): Nivel de dificultad.
- `idCuest` (obligatorio): Identificador único de la asignatura asociada a la dificultad.

**Ejemplo:**
```http
POST /dificultades/
Content-Type: application/json
```
```json
{
  "nivelDificultad": "Intermedio",
  "idCuest": 1
}
```
## Respuesta Exitosa (Código 201 Created)
```json
{
    "status": 201,
    "message": "Created",
    "idDif": 1
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

## Notas Adicionalesk
- Ten en cuenta la estructura de la tabla de dificultades en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar los parámetros requeridos para crear una nueva dificultad. Ajusta según tus necesidades específicas.