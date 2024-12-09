# React + Vite  
Tecnologías utilizadas
React: Framework JavaScript para construir interfaces de usuario interactivas.
Docker: Contenerización de la aplicación para facilitar la ejecución en entornos aislados.
Nginx: Servidor web para desplegar la aplicación.
CSS, HTML, JavaScript: Lenguajes principales utilizados para el desarrollo del frontend.

Prerequisitos
Antes de ejecutar este proyecto, asegúrate de tener las siguientes herramientas instaladas:

Node.js: Descargar e instalar Node.js.
Docker: Instalar Docker.

- Pasos para ejecutar el proyecto luego de clonarlo
-construye la imagen
- docker build -t nombre-imagen .
-ejecuta la imagen
-docker run -p 80:80 nombre-imagen
-Esto levantará el contenedor y la aplicación será accesible a través de tu navegador en la dirección
-http://localhost:8080.
