# Introducción
![GitHub repo size](https://img.shields.io/github/repo-size/MazinguerZZ/Proyecto_Pagina_Web?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/MazinguerZZ/Proyecto_Pagina_Web?style=for-the-badge&color=orange)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> Bienvenido a Coffee Express - Un sitio web moderno para una cafetería con funciones interactivas y un diseño atractivo

# Bienvenido a Coffee Express

Coffee Express es un sitio web moderno y completamente funcional para una cafetería, desarrollado con HTML, CSS y JavaScript puro (vanilla). Diseñado para una cafetería en Madrid, este proyecto muestra buenas prácticas de desarrollo web con un enfoque en la experiencia del usuario, las animaciones y el diseño responsive.

<Note>
Esta documentación cubre la estructura completa del sitio web, sus componentes, el sistema de estilos y la funcionalidad en JavaScript.
</Note>

## Características principales

<CardGroup cols={2}>
  <Card title="Carrusel interactivo" icon="images" href="/components/carousel">
    Navega a través de imágenes de café con transiciones suaves y controles con flechas
  </Card>

  <Card title="Secciones Hero animadas" icon="wand-magic-sparkles" href="/styling/animations">
    Secciones hero llamativas con efectos de Typed.js y divisores de ondas SVG
  </Card>

  <Card title="Galería del menú de café" icon="mug-hot" href="/pages/coffee-menu">
    Muestra bebidas calientes y frías con una galería de imágenes interactiva
  </Card>

  <Card title="Formulario de contacto" icon="envelope" href="/pages/contact">
    Recoge consultas de clientes con validación de formularios y retroalimentación al usuario
  </Card>

  <Card title="Reseñas de clientes" icon="star" href="/pages/home">
    Muestra testimonios con imágenes de perfil y tarjetas animadas
  </Card>

  <Card title="Navegación responsive" icon="bars" href="/components/navigation">
    Menú de navegación fijo con desplazamiento suave hacia las secciones de la página
  </Card>
</CardGroup>

## Descripción general del proyecto

Coffee Express demuestra técnicas modernas de desarrollo web, incluyendo:

* **Diseño responsive**: Enfoque mobile-first con layouts flexibles
* **Propiedades personalizadas de CSS**: Sistema de temas centralizado con variables CSS para colores y fuentes
* **Integración de animaciones**: Animaciones de entrada suaves usando la librería Animate.css
* **JavaScript interactivo**: Controles de carrusel, validación de formularios e interacciones con imágenes
* **Gráficos SVG**: Divisores de ondas personalizados para mayor atractivo visual
* **Librerías externas**: Integración de Typed.js para efectos de texto dinámico

## Estructura del sitio web

El sitio web consta de cuatro páginas principales:

1. **Home** (`index.html`) - Página principal con sección hero, carrusel de imágenes y reseñas de clientes  
2. **About Us** (`About-US.html`) - Historia de la empresa y carrusel de perfiles de empleados  
3. **Coffee Menu** (`OurCoffees.html`) - Galería de bebidas de café calientes y frías  
4. **Contact** (`Contactanos.html`) - Formulario de contacto para consultas de clientes  

Cada página presenta navegación, pie de página y elementos de marca consistentes.

## Stack tecnológico

<Accordion title="HTML5">
  Marcado semántico con estructura adecuada del documento, meta etiquetas y atributos de accesibilidad
</Accordion>

<Accordion title="CSS3">
  Características modernas de CSS incluyendo:

  * Propiedades personalizadas de CSS (variables)
  * Layouts con Flexbox y Grid
  * Animaciones y transiciones suaves
  * Diseño responsive con media queries
</Accordion>

<Accordion title="JavaScript Vanilla">
  Funcionalidad del lado del cliente:

  * Navegación del carrusel de imágenes
  * Validación de formularios
  * Controladores de clic en imágenes
  * Manipulación del DOM
</Accordion>

<Accordion title="Librerías externas">
  
* **Typed.js**: Efectos de animación de escritura
* **Animate.css**: Animaciones CSS preconstruidas
* Fuentes personalizadas desde Google Fonts (Caveat, Poppins)
</Accordion>

## Inicio rápido

<Steps>
  <Step title="Clonar el repositorio">
    Obtén los archivos del proyecto desde GitHub

```bash
git clone https://github.com/MazinguerZZ/Proyecto-Pagina-Web.git
```

  <Step title="Ir al directorio del proyecto">
    Navega a la ruta del proyecto

```bash
cd Proyecto-Pagina-Web/"Proyecto Interfaz"
```
  </Step>

  <Step title="Abrir en el navegador">
    Abre 'index.html' en tu navegador web para ver el sitio

```bash
# Usando un servidor HTTP simple (recomendado)
python -m http.server 8000
# Luego visita http://localhost:8000
```
  </Step>
</Steps>

## Guía de la documentación

Esta documentación está organizada en cinco secciones principales:

* **Primeros pasos (Getting Started)**: Instrucciones de configuración y guía de inicio rápido del proyecto.
* **Páginas (Pages)**: Explicación detallada de cada página del sitio web y sus funcionalidades.
* **Componentes (Components)**: Componentes reutilizables de la interfaz como la navegación, el carrusel y el footer.
* **Estilos (Styling)**: Arquitectura CSS, sistema de colores, tipografías y animaciones.
* **JavaScript**: Funcionalidad interactiva y lógica del lado del cliente.

<Card title="¿Listo para empezar?" icon="rocket" href="/quickstart">
  Accede a la guía de inicio rápido para configurar el proyecto y comenzar a usarlo.
</Card>
