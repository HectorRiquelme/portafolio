# Portafolio - Hector Riquelme

Portafolio web profesional de Hector Riquelme, Desarrollador Full Stack especialista en integraciones, e-commerce y automatizaciones con IA.

## Stack

- **React 18** - Componentes y estado
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos utility-first

## Funcionalidades

- Navegacion responsive con menu hamburguesa en mobile
- Animaciones de entrada con IntersectionObserver
- Grilla de proyectos filtrable por categoria (5 categorias)
- Modal de detalle por proyecto con stack tecnico y features
- Links directos a repositorios GitHub de cada proyecto
- Seccion de tecnologias con iconos
- Formulario de contacto
- Diseno dark theme optimizado para lectura

## Proyectos Incluidos

El portafolio presenta 15 proyectos agrupados en 5 categorias:

| Categoria | Proyectos | Repositorio |
|-----------|-----------|-------------|
| Plataformas Chilenas | Facturacion SII, Transbank WebPay, Khipu Pagos | [integraciones-chilenas](https://github.com/HectorRiquelme/integraciones-chilenas) |
| E-commerce | Child Theme WooCommerce, Tema Shopify, Plugin Despacho Comunas | [shopify-woocommerce](https://github.com/HectorRiquelme/shopify-woocommerce) |
| CRMs | HubSpot + WooCommerce, GoHighLevel Salud, Pipedrive + Sheets | [integraciones-crm](https://github.com/HectorRiquelme/integraciones-crm) |
| Bots IA | Cobranza con Voz, Chatbot WhatsApp, Cotizaciones Construccion | [bots-ia](https://github.com/HectorRiquelme/bots-ia) |
| WordPress | Diagnostico Carrusel, Optimizacion Rendimiento, Toolkit Migracion | [wordpress-fixes](https://github.com/HectorRiquelme/wordpress-fixes) |

## Instalacion y ejecucion

```bash
npm install
npm run dev
```

El servidor de desarrollo se iniciara en `http://localhost:5173`.

## Build para produccion

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/    # Navbar, Hero, About, Technologies, Projects, ProjectModal, Contact, Footer
  data/          # Datos de proyectos y tecnologias
  hooks/         # Hook de animaciones con IntersectionObserver
  App.jsx        # Componente principal
  main.jsx       # Punto de entrada
  index.css      # Estilos globales y animaciones
```
