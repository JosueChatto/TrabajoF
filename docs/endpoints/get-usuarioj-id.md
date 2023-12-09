# Obtener información de un Jugador

Endpoint: `/usuarios/:id`

## Descripción

Este endpoint permite obtener información detallada de un jugador específico utilizando su identificador (`idJugador`).

## Método

- GET

## Parámetros de la URL

- `id` (Tipo: Entero) - Identificador único del jugador.

## Respuesta Exitosa

- Código de Estado: 200 OK
- Cuerpo de la Respuesta:
## Respuesta en Caso de Error
- Código de Estado: 404 Not Found
- Cuerpo de la Respuesta:

```json
{
  "idJugador": 1,
  "gamertag": "EjemploGamertag",
  "nombre": "Juan",
  "apellidos": "Pérez",
  "edad": 25,
  "idDif": 2,
  "idPuntos": 3
}
```

## Respuesta en Caso de Error
- Código de Estado: 404 Not Found
- Cuerpo de la Respuesta:

```json
{
    
  "error": 500,
  "error": "internal_error",
  "error": "El jugador con el ID especificado no fue encontrado."
}
```

## Notas adicionales
Asegurate de incluir un ID válido en la solicitud para obtener la información sobre los libros de un tema en específico.