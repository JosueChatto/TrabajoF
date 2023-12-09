# Endpoint: `GET /puntosProg/{idPuntos}`

Obtiene la información específica de un registro de puntos.

## Parámetros de URL
- `{idPuntos}` (obligatorio): Identificador único de los puntos que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /puntosProg/1
```
## Respuesta Exitosa (Código 200 OK)
```json
{"idPuntos":1,"idJugador":2,"puntos":100}
```

## Respuestas de Errores Posibles

- Código 404 Not Found:
```json
{"error":"Not found"}

```

- Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
```

## Notas Adicionales
- Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre un registro de puntos en específico.
