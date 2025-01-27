# Usa una imagen base con Node.js
FROM node:18-alpine

# Configura el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila el proyecto con TypeScript
RUN npm run build

# Establece el puerto expuesto
EXPOSE 8080

# Comando de inicio para el contenedor
CMD ["node", "dist/server.js"]
