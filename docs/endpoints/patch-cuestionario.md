# Endpoint: `PATCH /cuestionarios/{idCuest}`

Actualiza la información de un cuestionario específico.

## Parámetros de URL
- `{idCuest}` (obligatorio): Identificador único del cuestionario que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `asignatura` (opcional): Nueva asignatura del cuestionario.
- `pregunta` (opcional): Nueva pregunta del cuestionario.
- `respuesta` (opcional): Nueva respuesta del cuestionario.

**Ejemplo:**
```http
PATCH /cuestionarios/1
Content-Type: application/json
```
```json 
{
  "asignatura": "Nueva Asignatura",
  "pregunta": "Nueva Pregunta",
  "respuesta": "Nueva Respuesta"
}`
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:
```json
{ "errno": 400, "error": "Bad Request" }
```
- Código 404 Not Found:
```json
{"error":"Not found"}

```
- Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
}
```

## Notas Adicionales 
- Asegúrate de proporcionar al menos un parámetro para actualizar la información del cuestionario.
Asegúrate de utilizar un {idCuest} válido en la URL para actualizar la información del cuestionario correspondiente.