# Endpoint: `PATCH /usuarios/{idJugador}`

Actualiza la información de un jugador específico.

## Parámetros de URL
- `{idJugador}` (obligatorio): Identificador único del jugador que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `gamertag` (opcional): Nuevo gamertag del jugador.
- `nombre` (opcional): Nuevo nombre del jugador.
- `apellidos` (opcional): Nuevos apellidos del jugador.
- `edad` (opcional): Nueva edad del jugador.
- `idDif` (opcional): Nuevo identificador de dificultad asociado al jugador.
- `idPuntos` (opcional): Nuevo identificador de puntos asociado al jugador.

**Ejemplo:**
```http
PATCH /usuarios/1
```
Content-Type: application/json


```json
{
  "gamertag": "NuevoGamertag",
  "nombre": "NuevoNombre",
  "apellidos": "NuevosApellidos",
  "edad": 30,
  "idDif": 3,
  "idPuntos": 4
}
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
  { "error": 400, "error": "Bad Request" }
```
- Código 404 Not Found:
```json
  { "error": 404, "error": "Bad Request" }

```
- Código 500 Internal Server Error:
```json
{
  "error": 500,
  "error": "internal_error",
}

```

## Notas Adicionales
- 
