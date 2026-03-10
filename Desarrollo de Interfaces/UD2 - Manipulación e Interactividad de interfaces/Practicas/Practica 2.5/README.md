# 📝 Proyecto Formulario: Gestión Dinámica de Datos

![GitHub repo size](https://img.shields.io/github/repo-size/MazinguerZZ/Proyecto_Formulario?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/MazinguerZZ/Proyecto_Formulario?style=for-the-badge&color=orange)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Este repositorio contiene una solución completa para la implementación de un **Formulario Web Interactivo**. El proyecto se centra en la experiencia de usuario (UX), validaciones robustas en el lado del cliente y una arquitectura de código limpia y escalable.

---

## ✨ Características Principales

* ✅ **Validación en Tiempo Real:** Feedback instantáneo mediante expresiones regulares (Regex).
* 📱 **Diseño Responsive:** Layout adaptativo utilizando CSS Grid y Flexbox.
* 🛡️ **Seguridad:** Sanitización básica de inputs para prevenir scripts maliciosos.
* 🎨 **UI Moderna:** Interfaz limpia con transiciones suaves y estados de error visuales.
* 🚀 **Ligero:** Sin dependencias pesadas, optimizado para una carga ultrarrápida.

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
| :--- | :--- |
| **HTML5** | Estructura semántica del formulario. |
| **CSS3** | Estilos personalizados, variables y animaciones. |
| **JavaScript (ES6+)** | Lógica de validación y manipulación del DOM. |
| **Git** | Control de versiones. |

---

## 🚀 Instalación y Configuración

Sigue estos pasos para montar el entorno de desarrollo localmente.

### 1. Requisitos Previos
Asegúrate de tener instalado un navegador moderno y un editor de código (como VS Code). Si planeas hacer despliegues, ten instalado [Git](https://git-scm.com/).

### 2. Clonar el Proyecto
Utiliza el terminal para clonar el repositorio en tu máquina local:

```bash
# Clonar el repositorio
git clone [https://github.com/MazinguerZZ/Proyecto_Formulario.git](https://github.com/MazinguerZZ/Proyecto_Formulario.git)

# Entrar en la carpeta del proyecto
cd Proyecto_Formulario
```

## 3. Ejecución
Si es un proyecto puramente frontend, puedes usar Live Server en VS Code o simplemente abrir el archivo `index.html`:

```bash
# Si usas Python para levantar un servidor rápido
python -m http.server 8000
```
Luego visita ```http://localhost:8000``` en tu navegador.

## 📂 Estructura del Proyecto

```bash
Proyecto_Formulario/
├── 📁 assets/          # Imágenes, iconos y recursos estáticos
├── 📁 css/             # Archivos de estilo (.css)
│   └── styles.css
├── 📁 js/              # Lógica de scripts (.js)
│   ├── validation.js
│   └── main.js
├── index.html          # Punto de entrada principal
└── README.md           # Documentación
```

## 🔧 Ejemplo de Validación de Código
El proyecto utiliza validaciones modulares. Aquí un ejemplo de cómo se maneja la lógica de JS:

```js
// Ejemplo de validación de email
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

if (!validateEmail(userInput)) {
  console.error("Formato de correo no válido");
}
```

## 🤝 Contribuciones

Para colaborar en el desarrollo de este proyecto, por favor siga el procedimiento estándar detallado a continuación:

1. **Bifurcación del repositorio:** Realice un **Fork** del proyecto para trabajar en su propia copia local.
2. **Creación de una rama de trabajo:** Genere una rama independiente para implementar sus mejoras o correcciones:
   ```bash
   git checkout -b feature/MejorandoFormulario
   ```
3. **Registro de cambios:** Documente sus avances mediante mensajes de commit descriptivos y concisos:
   ```bash
   git commit -m 'Añadida validación de teléfono'
   ```
4. **Sincronización remota:** Cargue los cambios realizados en su repositorio de GitHub:
   ```bash
   git push origin feature/MejorandoFormulario
   ```
5. **Solicitud de integración:** Inicie un Pull Request detallando las modificaciones efectuadas, la justificación técnica de las mejoras y cualquier información relevante que facilite la revisión del código antes de su incorporación a la rama principal.
