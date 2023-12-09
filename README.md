# API RESTful con Node.js

Se tiene contemplado desarrollar videojuego que sea didáctico y desafiante para todo el publico, este juego contará con distintos niveles en los cuales en cada nivel se encontrará un laberinto, dicho laberinto generará de manera aleatoria, los usuarios tendrán que cumplir la misión de salir de los laberintos pero no será a lo único que se enfrentarán, el laberinto contendrá diferentes tipos de puzzles, rompecabezas, encuestas en un tiempo límite; esto es para abrirse paso ya que el camino no estará totalmente libre. Con esto desafía la agilidad mental de los jugadores con los distintos métodos de ejercicios.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/JosueChatto/TrabajoF
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)