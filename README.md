# Mundo Ferretero

Sitio web de Mundo Ferretero, ferretería y venta de materiales para construcción en Santiago Atitlán, Sololá.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Previsualiza la versión de producción. |

## Contenido

- Productos y categorías: `src/data/products.json`
- Textos en español: `src/data/i18n/es.json`
- Textos en inglés: `src/data/i18n/en.json`
- Imágenes de producto: `public/images/products/`
- Logo: `public/logo.png`

No se muestran precios inventados: las consultas de disponibilidad y precio se envían por WhatsApp al número configurado en los archivos de idioma.

## Publicación en Cloudflare Pages

Conecta el repositorio de GitHub y usa esta configuración:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `22` o superior

El proyecto se genera como sitio estático e incluye las rutas `/` (español) y `/en` (inglés).
