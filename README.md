# A TOPE DE REVOLUCIONES

Sitio web profesional para una tienda de accesorios y personalización de motos.

## Características

- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Sección de accesorios con 12 categorías
- ✅ Sección de servicios
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp
- ✅ Integración con Google Maps
- ✅ Animaciones fluidas

## Tecnologías

- React 18.3.1
- Vite 8.0.10
- CSS3 con animaciones
- Formspree para formularios de contacto

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/a-tope-revoluciones.git
cd a-tope-revoluciones

# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Desplegar en GitHub Pages
pnpm run deploy
```

## Configuración

### Número de WhatsApp
Edita el archivo `src/App.jsx` línea 30:
```javascript
window.open('https://wa.me/573125113557', '_blank')
```

### Ubicación en Google Maps
Edita el archivo `src/App.jsx` línea 35:
```javascript
window.open('https://maps.google.com/?q=tu+ubicacion', '_blank')
```

### Colores
Edita el archivo `src/App.css` líneas 9-17 para cambiar los colores principales.

## Formulario de Contacto

El formulario utiliza **Formspree** para enviar correos. Los mensajes se envían a: `straykerg3@gmail.com`

Para cambiar el correo de destino, necesitarás crear un nuevo formulario en [Formspree](https://formspree.io) y actualizar la URL en `src/App.jsx` línea 48.

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub llamado `a-tope-revoluciones`
2. Ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/a-tope-revoluciones.git
   git push -u origin main
   pnpm run deploy
   ```
3. Ve a Settings > Pages y asegúrate de que esté configurado para usar la rama `gh-pages`
4. Tu sitio estará disponible en: `https://tu-usuario.github.io/a-tope-revoluciones/`

## Licencia

© 2024 A TOPE DE REVOLUCIONES. Todos los derechos reservados.
