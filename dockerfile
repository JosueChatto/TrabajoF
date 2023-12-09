#Crear una imagen a partir de node.js
#Version Soporte a largo plazo - Ligera
FROM node:lts-slim

#Crea y cambiamos al directorio /app
WORKDIR /app/

#Copiar el archivo package json y package lock a app, esto es despues de iniciar lo de la aplicacion
COPY ./package*.json /app/

#Instalar las dependencias de node, esto es despues de iniciar lo de la aplicacion
RUN npm install

# Copia el contenido del proyecto a /app
COPY . /app/

#Exponer el puerto 80 del contenedor
EXPOSE 80


#Iniciar el servidor de node
CMD ["npm", "start"]