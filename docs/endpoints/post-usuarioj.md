# Endpoint: `POST /usuarios/`

Crea una nueva entrada para un jugador con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `gamertag` (obligatorio): Gamertag del jugador.
- `nombre` (obligatorio): Nombre del jugador.
- `apellidos` (obligatorio): Apellidos del jugador.
- `edad` (obligatorio): Edad del jugador.
- `idDif` (opcional): Identificador único de la dificultad asociada al jugador.
- `idPuntos` (opcional): Identificador único de los puntos asociados al jugador.

**Ejemplo:**
```http
POST /usuarios/
Content-Type: application/json
```
```json
{
  "gamertag": "EjemploGamertag",
  "nombre": "Juan",
  "apellidos": "Pérez",
  "edad": 25,
  "idDif": 2,
  "idPuntos": 3
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
- 
```json
{
  "error": 500,
  "error": "internal_error",
}
```

## Notas Adicionales
- Ten en cuenta la estructura de la tabla de usuarios en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar los parámetros requeridos para crear un nuevo jugador.
Los campos idDif y idPuntos son opcionales y pueden ser proporcionados si se desea asociar el jugador con una dificultad y puntos específicos. Ajusta según tus necesidades específicas.