# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./
COPY vite.config.js ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:stable-alpine

# Copiar los archivos estáticos generados en la etapa 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Configurar NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
