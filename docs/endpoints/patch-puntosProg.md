# Endpoint: `PATCH /puntosProg/{idPuntos}`

Actualiza la información de un registro de puntos específico.

## Parámetros de URL
- `{idPuntos}` (obligatorio): Identificador único de los puntos que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `idJugador` (opcional): Nuevo identificador de jugador asociado a los puntos.
- `puntos` (opcional): Nueva cantidad de puntos.

**Ejemplo:**
```http
PATCH /puntosProg/1
Content-Type: application/json
```
```json
{
  "idJugador": 3,
  "puntos": 150
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
- Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
}
```
-  Código 404 Not Found:
```json
{"error":"Not found"}
```
## Notas Adicionales
- Asegúrate de proporcionar al menos un parámetro para actualizar la información de la dificultad.
Asegúrate de utilizar un {idDif} válido en la URL para actualizar la información de la dificultad correspondiente.