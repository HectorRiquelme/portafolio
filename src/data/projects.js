export const categories = [
  "Todos",
  "Plataformas Chilenas",
  "E-commerce",
  "CRMs",
  "Bots IA",
  "WordPress",
];

export const projects = [
  {
    id: 1,
    name: "Sistema de Facturacion Electronica (DTE)",
    icon: "\uD83E\uDDFE",
    category: "Plataformas Chilenas",
    shortDesc:
      "Sistema completo de facturacion electronica chilena simulada con generacion de XML DTE, firma digital X.509, timbre electronico (TED) y PDFs con codigo PDF417.",
    fullDesc:
      "Sistema completo de facturacion electronica chilena que replica el flujo del SII. Genera documentos tributarios electronicos (DTE) en formato XML, aplica firma digital con certificados X.509 autogenerados, genera el timbre electronico TED y produce PDFs profesionales con codigo de barras PDF417. Incluye un panel web con filtros avanzados y una API REST completa para integracion con otros sistemas.",
    features: [
      "Generacion XML DTE (factura, boleta, nota de credito)",
      "Firma digital con certificado autogenerado X.509",
      "Timbre electronico TED",
      "PDF con codigo PDF417",
      "Panel web con filtros avanzados",
      "API REST completa",
    ],
    stack: ["Node.js", "Express", "SQLite", "node-forge", "pdfkit", "bwip-js", "XML"],
    gradient: "from-cyan-600 to-blue-700",
    github: "https://github.com/HectorRiquelme/pagos-chile-facturacion-sii",
  },
  {
    id: 2,
    name: "Pasarela de Pagos Transbank WebPay Plus",
    icon: "\uD83D\uDCB3",
    category: "Plataformas Chilenas",
    shortDesc:
      "Pasarela de pagos que replica el flujo completo de Transbank WebPay Plus, desde el catalogo hasta el comprobante con codigo de autorizacion.",
    fullDesc:
      "Implementacion completa del flujo de pagos WebPay Plus de Transbank. Incluye un catalogo de productos, carrito de compras persistido en localStorage, formulario mock de Transbank con aspecto realista, y generacion de comprobantes con codigo de autorizacion. El panel de administracion permite filtrar y analizar ventas con multiples criterios.",
    features: [
      "Flujo completo de pago WebPay",
      "Formulario mock Transbank realista",
      "Comprobante con codigo de autorizacion",
      "Panel admin con filtros de ventas",
      "Carrito persistido en localStorage",
    ],
    stack: ["Node.js", "Express", "React", "Vite", "Tailwind", "SQLite"],
    gradient: "from-blue-600 to-indigo-700",
    github: "https://github.com/HectorRiquelme/pagos-chile-transbank-webpay",
  },
  {
    id: 3,
    name: "Sistema de Pagos Khipu",
    icon: "\uD83C\uDFE6",
    category: "Plataformas Chilenas",
    shortDesc:
      "Sistema de pagos por transferencia bancaria simulando el flujo de Khipu con seleccion de banco, webhooks y expiracion automatica de cobros.",
    fullDesc:
      "Replica del flujo de pagos de Khipu, la plataforma chilena de pagos por transferencia bancaria. Permite seleccionar entre 8 bancos chilenos reales, procesa webhooks de confirmacion, y maneja la expiracion automatica de cobros a las 24 horas mediante cron jobs. Incluye panel de administracion con filtros por estado y generacion de comprobantes descargables.",
    features: [
      "Seleccion de 8 bancos chilenos reales",
      "Webhook de confirmacion",
      "Expiracion automatica 24h (cron)",
      "Panel admin con filtros por estado",
      "Comprobante descargable",
    ],
    stack: ["Python", "FastAPI", "React", "Vite", "Tailwind", "SQLite", "APScheduler"],
    gradient: "from-emerald-600 to-teal-700",
    github: "https://github.com/HectorRiquelme/pagos-chile-khipu",
  },
  {
    id: 4,
    name: "Child Theme WooCommerce - Tienda Deportiva",
    icon: "\uD83D\uDC5F",
    category: "E-commerce",
    shortDesc:
      "Tema hijo de WooCommerce completo para tienda de ropa deportiva chilena con checkout personalizado incluyendo RUT y comunas.",
    fullDesc:
      "Tema hijo de WooCommerce disenado especificamente para el mercado chileno de ropa deportiva. Incluye selector de talla y color con preview en tiempo real, badge de envio gratis configurable, checkout personalizado con validacion de RUT y selector de comunas de Chile, sistema de seguimiento de pedidos, y datos de prueba importables via WP-CLI.",
    features: [
      "Selector de talla y color con preview",
      'Badge "Envio gratis sobre $30.000"',
      "Checkout con RUT y comunas de Chile",
      "Seguimiento de pedidos",
      "Datos de prueba importables via WP-CLI",
    ],
    stack: ["PHP", "WordPress", "WooCommerce", "CSS", "JavaScript"],
    gradient: "from-orange-500 to-red-600",
    github: "https://github.com/HectorRiquelme/ecommerce-woocommerce-theme-deportiva",
  },
  {
    id: 5,
    name: "Tema Shopify Minimalista - Ropa Masculina",
    icon: "\uD83D\uDC54",
    category: "E-commerce",
    shortDesc:
      "Tema de Shopify personalizado basado en Dawn para marca de ropa masculina minimalista con hero de video, mega menu y parallax.",
    fullDesc:
      "Tema personalizado de Shopify basado en Dawn, optimizado para marcas de ropa masculina con estetica minimalista. Incluye hero section con video de fondo, grilla de productos con hover second-image, carousel de producto con guia de tallas interactiva, mega menu configurable desde el admin de Shopify, seccion parallax para storytelling, y newsletter con texto legal adaptado a la normativa chilena.",
    features: [
      "Hero con video de fondo",
      "Grilla con hover second-image",
      "Carousel de producto + guia de tallas",
      "Mega menu configurable",
      'Seccion parallax "Nuestra Historia"',
      "Newsletter + texto legal chileno",
    ],
    stack: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    gradient: "from-gray-600 to-gray-800",
    github: "https://github.com/HectorRiquelme/ecommerce-shopify-tema-minimalista",
  },
  {
    id: 6,
    name: "Plugin WooCommerce - Despacho por Comunas",
    icon: "\uD83D\uDE9A",
    category: "E-commerce",
    shortDesc:
      "Plugin de WordPress que implementa sistema de despacho con las 346 comunas de Chile agrupadas por region, zonas configurables y retiro en tienda.",
    fullDesc:
      "Plugin de WordPress/WooCommerce que implementa un sistema completo de despacho adaptado a Chile. Contiene las 346 comunas del pais agrupadas por region, permite configurar zonas de despacho con costos y plazos diferenciados, ofrece opcion de retiro en tienda, y cuenta con un dashboard de pedidos filtrable por zona de despacho.",
    features: [
      "346 comunas chilenas precargadas",
      "Zonas de despacho configurables",
      "Costos y plazos por zona",
      "Retiro en tienda",
      "Dashboard de pedidos por zona",
    ],
    stack: ["PHP", "WordPress", "WooCommerce", "JavaScript", "CSV"],
    gradient: "from-purple-600 to-pink-600",
    github: "https://github.com/HectorRiquelme/ecommerce-woocommerce-plugin-despacho",
  },
  {
    id: 7,
    name: "Integracion HubSpot + WooCommerce",
    icon: "\uD83D\uDD04",
    category: "CRMs",
    shortDesc:
      "Microservicio que sincroniza ventas de WooCommerce con HubSpot CRM, con pipeline de ventas visual tipo kanban.",
    fullDesc:
      "Microservicio que conecta WooCommerce con HubSpot CRM mediante webhooks. Automatiza la creacion de contactos y deals en HubSpot a partir de ordenes de WooCommerce. Incluye un pipeline kanban visual con 4 etapas de venta, dashboard con metricas en tiempo real, y 50 ordenes mock con datos realistas del mercado chileno.",
    features: [
      "Webhook WooCommerce a HubSpot",
      "Creacion automatica de contactos y deals",
      "Pipeline kanban visual (4 etapas)",
      "Dashboard con metricas de ventas",
      "50 ordenes mock con datos chilenos",
    ],
    stack: ["Node.js", "Express", "SQLite", "HubSpot API mock"],
    gradient: "from-orange-500 to-amber-600",
    github: "https://github.com/HectorRiquelme/crm-hubspot-woocommerce-sync",
  },
  {
    id: 8,
    name: "Automatizacion GoHighLevel - Centro de Salud",
    icon: "\uD83C\uDFE5",
    category: "CRMs",
    shortDesc:
      "Sistema de automatizacion para centro de salud chileno con pipeline de pacientes, WhatsApp simulado y recordatorios automaticos.",
    fullDesc:
      "Sistema de automatizacion disenado para centros de salud chilenos, replicando las funcionalidades de GoHighLevel. Incluye pipeline kanban para seguimiento de pacientes, simulacion de mensajes WhatsApp con confirmaciones y recordatorios automaticos (24h y 1h antes de la cita), agenda por doctor, y metricas de conversion detalladas.",
    features: [
      "Pipeline kanban de pacientes",
      "WhatsApp simulado (confirmacion + recordatorios)",
      "Recordatorio automatico 24h y 1h antes",
      "Agenda por doctor",
      "Metricas de conversion",
    ],
    stack: ["Node.js", "Express", "React", "SQLite"],
    gradient: "from-green-500 to-emerald-600",
    github: "https://github.com/HectorRiquelme/crm-gohighlevel-centro-salud",
  },
  {
    id: 9,
    name: "Sync Bidireccional Pipedrive - Google Sheets",
    icon: "\uD83D\uDCCA",
    category: "CRMs",
    shortDesc:
      "Servicio de sincronizacion bidireccional entre CRM y Google Sheets con deteccion de conflictos y logs completos.",
    fullDesc:
      "Servicio de sincronizacion bidireccional entre Pipedrive CRM y Google Sheets. Ejecuta sincronizacion cada 5 minutos con deteccion inteligente de conflictos (CRM prevalece), mantiene un log completo del historial de sincronizacion, y ofrece un panel con KPIs y tablas editables. Incluye 100 deals con empresas chilenas reales como datos de prueba.",
    features: [
      "Sync bidireccional cada 5 minutos",
      "Deteccion de conflictos (CRM prevalece)",
      "Log de sincronizacion con historial",
      "Panel con KPIs y tablas editables",
      "100 deals con empresas chilenas",
    ],
    stack: ["Python", "FastAPI", "APScheduler", "CSV", "Jinja2"],
    gradient: "from-blue-500 to-cyan-600",
    github: "https://github.com/HectorRiquelme/crm-pipedrive-sheets-sync",
  },
  {
    id: 10,
    name: "Bot de Cobranza con Voz Sintetica",
    icon: "\uD83E\uDD16",
    category: "Bots IA",
    shortDesc:
      "Sistema de cobranza automatizada con generacion de scripts personalizados por nivel de mora y audio sintetico simulado.",
    fullDesc:
      "Sistema de cobranza automatizada que genera scripts personalizados segun el nivel de mora del deudor (4 tonos diferentes). Permite carga masiva de deudores via CSV, genera audio WAV dinamicamente para cada llamada, y cuenta con un panel completo de metricas de cobranza con filtros por estado y nivel de mora.",
    features: [
      "Carga masiva de deudores via CSV",
      "Scripts personalizados (4 tonos por mora)",
      "Audio WAV generado dinamicamente",
      "Panel con metricas de cobranza",
      "Filtros por estado y mora",
    ],
    stack: ["Python", "FastAPI", "React", "Vite", "SQLite", "wave"],
    gradient: "from-red-500 to-rose-600",
    github: "https://github.com/HectorRiquelme/ia-bot-cobranza-voz",
  },
  {
    id: 11,
    name: "Chatbot WhatsApp - Atencion al Cliente",
    icon: "\uD83D\uDCAC",
    category: "Bots IA",
    shortDesc:
      "Chatbot de atencion al cliente con interfaz WhatsApp simulada, integracion LLM generica y escalamiento a humano.",
    fullDesc:
      "Chatbot de atencion al cliente con una interfaz que replica fielmente WhatsApp (burbujas, ticks de lectura, hora). Integra un LLM generico con modo mock que incluye 18 reglas de negocio predefinidas, escalamiento automatico a agente humano cuando el bot no puede resolver, system prompt editable desde el panel de administracion, y metricas detalladas de resolucion.",
    features: [
      "UI fidedigna de WhatsApp (burbujas, ticks, hora)",
      "LLM generico con modo mock (18 reglas)",
      "Escalamiento a humano automatico",
      "System prompt editable desde admin",
      "Metricas de resolucion",
    ],
    stack: ["Node.js", "Express", "React", "SQLite", "better-sqlite3"],
    gradient: "from-green-600 to-green-800",
    github: "https://github.com/HectorRiquelme/ia-chatbot-whatsapp-pyme",
  },
  {
    id: 12,
    name: "Asistente de Cotizaciones - Construccion",
    icon: "\uD83D\uDCC4",
    category: "Bots IA",
    shortDesc:
      "Asistente de cotizaciones automaticas para empresa de construccion chilena con calculo de materiales, mano de obra e IVA 19%.",
    fullDesc:
      "Asistente inteligente de cotizaciones para empresas de construccion chilenas. Incluye formulario inteligente que solicita tipo de obra, metros cuadrados y material. Utiliza un motor de cotizacion deterministico con opcion de LLM para sugerencias, genera PDFs descargables con detalle completo incluyendo IVA 19%, tabla de precios editable, y precios actualizados del mercado chileno.",
    features: [
      "Formulario inteligente (tipo obra, m2, material)",
      "Motor de cotizacion deterministico + LLM opcional",
      "PDF descargable con detalle completo",
      "Tabla de precios editable",
      "Precios reales mercado chileno 2026",
    ],
    stack: ["Next.js 14", "TypeScript", "Supabase", "jsPDF", "TailwindCSS"],
    gradient: "from-amber-500 to-yellow-600",
    github: "https://github.com/HectorRiquelme/ia-cotizaciones-construccion",
  },
  {
    id: 13,
    name: "Diagnostico y Fix de Carrusel WordPress",
    icon: "\uD83D\uDD27",
    category: "WordPress",
    shortDesc:
      "Caso de estudio documentado: entorno Docker con 3 bugs intencionales en un carrusel WordPress y sus soluciones paso a paso.",
    fullDesc:
      "Caso de estudio practico que presenta un entorno Docker con WordPress conteniendo 3 bugs intencionales en un carrusel (jQuery no cargado, CSS roto, script bloqueante). Incluye documentacion detallada del diagnostico paso a paso, archivo con las soluciones explicadas, y un script bash que aplica las correcciones automaticamente.",
    features: [
      "Docker WP+MySQL+phpMyAdmin",
      "3 bugs reales (jQuery, CSS, script bloqueante)",
      "DIAGNOSTICO.md paso a paso",
      "FIX.md con soluciones",
      "Script bash de correccion automatica",
    ],
    stack: ["PHP", "WordPress", "Docker", "jQuery", "CSS", "Bash"],
    gradient: "from-slate-500 to-slate-700",
    github: "https://github.com/HectorRiquelme/wordpress-diagnostico-carrusel",
  },
  {
    id: 14,
    name: "Optimizacion de Rendimiento WordPress + WooCommerce",
    icon: "\u26A1",
    category: "WordPress",
    shortDesc:
      "Entorno Docker preconfigurado para demostrar optimizacion de rendimiento con Nginx, Redis y 500 productos de prueba.",
    fullDesc:
      "Entorno Docker completo preconfigurado para demostrar tecnicas de optimizacion de rendimiento en WordPress con WooCommerce. Incluye stack con Nginx como proxy reverso, Redis para object cache, 500 productos CSV importables, configuracion de lazy loading, minificacion y defer de scripts, y benchmark automatizado con Apache Bench.",
    features: [
      "Docker con WP+WC+MySQL+Nginx+Redis",
      "500 productos CSV importables",
      "Cache Nginx + Redis Object Cache",
      "Lazy loading + minificacion + defer",
      "Benchmark con Apache Bench",
    ],
    stack: ["PHP", "WordPress", "WooCommerce", "Nginx", "Redis", "Docker", "Bash"],
    gradient: "from-yellow-500 to-orange-600",
    github: "https://github.com/HectorRiquelme/wordpress-optimizacion-rendimiento",
  },
  {
    id: 15,
    name: "Toolkit de Migracion WordPress",
    icon: "\uD83D\uDCE6",
    category: "WordPress",
    shortDesc:
      "Conjunto completo de scripts para migracion de WordPress: backup, restauracion, SSL y verificacion con entorno de demo Docker.",
    fullDesc:
      "Conjunto completo de herramientas para migracion de sitios WordPress. Incluye scripts de backup (DB + wp-content + checksum), migracion (restore + search-replace), configuracion SSL (HTTPS + redirect), y verificacion completa post-migracion. El entorno de demo Docker incluye 2 instancias WordPress (origen y destino) para practicar el flujo completo.",
    features: [
      "backup.sh (DB + wp-content + checksum)",
      "migrate.sh (restore + search-replace)",
      "ssl-setup.sh (HTTPS + redirect)",
      "verify.sh (validacion completa)",
      "Docker con 2 instancias WP (origen/destino)",
    ],
    stack: ["Bash", "PHP", "WordPress", "Docker", "WP-CLI", "MySQL"],
    gradient: "from-indigo-500 to-violet-600",
    github: "https://github.com/HectorRiquelme/wordpress-toolkit-migracion",
  },
];
