# Endpoint: `POST /puntosProg/`

Crea una nueva entrada para un registro de puntos con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `idJugador` (obligatorio): Identificador único del jugador asociado a los puntos.
- `puntos` (obligatorio): Cantidad de puntos.

**Ejemplo:**
```http
POST /puntosProg/
Content-Type: application/json
```
```json
{
  "idJugador": 2,
  "puntos": 100
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
    "status": 201,
    "message": "Created",
    "idPuntos": 1
}
```
## Respuestas de Errores Posibles
- Código 400 Bad Request:

```json
{ "error": 400, "error": "Bad Request" }
```
- 
```json
{
  "error": 500,
  "error": "internal_error",
}
```

## Notas Adicionales
-Ten en cuenta la estructura de la tabla de puntos en la base de datos al interactuar con este endpoint. 