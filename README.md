# 🖼️ Background Remover Backend

API REST para eliminar el fondo de imágenes utilizando el paquete `@imgly/background-removal-node`. Construida con Node.js y Express.js.

## 🚀 Características

- Elimina el fondo de imágenes (PNG, JPG, JPEG) automáticamente.
- Devuelve la imagen resultante en formato PNG con fondo transparente.
- Endpoint simple tipo `POST` que recibe la imagen como `multipart/form-data`.
- Manejo de errores y validación de archivos.
- Lista para desplegar en entornos como DigitalOcean, AWS o Heroku.

## 📦 Tecnologías utilizadas

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [Express.js](https://expressjs.com/)
- [@imgly/background-removal-node](https://www.npmjs.com/package/@imgly/background-removal-node)
- [Multer](https://www.npmjs.com/package/multer) para manejo de formularios multipart
- [dotenv](https://www.npmjs.com/package/dotenv) para variables de entorno

## 📋 Requisitos previos

- Node.js 18+ y npm instalados.
- Conexión a internet (el modelo de IA se descarga en la primera ejecución).

## 🔧 Instalación y configuración

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/background-remover-backend.git
cd background-remover-backend
```
