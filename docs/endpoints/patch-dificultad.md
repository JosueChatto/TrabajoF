# Endpoint: `PATCH /dificultades/{idDif}`

Actualiza la información de una dificultad específica.

## Parámetros de URL
- `{idDif}` (obligatorio): Identificador único de la dificultad que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `nivelDificultad` (opcional): Nuevo nivel de dificultad.
- `idCuest` (opcional): Nuevo identificador de cuestionario asociado a la dificultad.

**Ejemplo:**
```http
PATCH /dificultades/1
Content-Type: application/json
```
```json
{
  "nivelDificultad": "Nuevo Nivel",
  "idCuest": 2
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
}
```
## Respuestas de Errores Posibles
- Código 400 Bad Request
```json
  { "error": 400, "error": "Bad Request" }
```
- Código 404 Not Found:
```json
  {"error":"Not found"}
```
-  Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
}

```
## Notas Adicionales
- Asegúrate de proporcionar al menos un parámetro para actualizar la información de la dificultad.
Asegúrate de utilizar un {idDif} válido en la URL para actualizar la información de la dificultad correspondiente.

