# Endpoint: `GET /dificultades/{idDif}`

Obtiene la información específica de una dificultad.

## Parámetros de URL
- `{idDif}` (obligatorio): Identificador único de la dificultad que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /dificultades/1
```
## Respuesta Exitosa (Código 200 OK)

```json
{
    "idDif":1,"nivelDificultad":"Fácil","idCuest":2
}
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
Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre una dificultad en específico.