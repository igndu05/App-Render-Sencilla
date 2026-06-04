# App Render Sencilla

## Descripción

App Render Sencilla es una aplicación web estática desarrollada como práctica de integración y despliegue continuo (CI/CD) utilizando GitHub, GitHub Actions y Render.

El proyecto demuestra cómo automatizar pruebas, despliegues y recuperación ante fallos mediante un pipeline sencillo pero funcional.

## Objetivos del proyecto

* Gestionar el código fuente mediante Git y GitHub.
* Automatizar la ejecución de pruebas con GitHub Actions.
* Desplegar automáticamente la aplicación en Render.
* Bloquear despliegues cuando los tests fallan.
* Gestionar incidencias mediante rollback.
* Documentar el flujo completo de CI/CD.

## Tecnologías utilizadas

* HTML5
* Node.js
* Jest
* Git
* GitHub
* GitHub Actions
* Render

## Estructura del proyecto

```text
App-Render-Sencilla/
│
├── index.html
├── saludo.js
├── package.json
│
├── tests/
│   └── saludo.test.js
│
└── .github/
    └── workflows/
        └── tests.yml
```

## Funcionamiento de la aplicación

La aplicación consiste en una página web estática desplegada en Render. Además, incluye una función JavaScript sencilla y una batería de pruebas automáticas para demostrar la integración continua.

## Pipeline CI/CD implementado

El flujo de trabajo sigue los siguientes pasos:

1. El desarrollador realiza cambios en el entorno local.
2. Los cambios se guardan mediante Git.
3. Se realiza un `git push` al repositorio de GitHub.
4. GitHub Actions ejecuta automáticamente los tests.
5. Si los tests fallan, el proceso se detiene.
6. Si los tests son correctos, Render detecta el cambio.
7. Render genera un nuevo despliegue automático.
8. La nueva versión queda disponible en producción.
9. En caso de incidencia, puede ejecutarse un rollback desde Render.

### Esquema del flujo

```text
Desarrollador
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
(Ejecución de tests)
      │
 ┌────┴────┐
 │         │
 ▼         ▼
FAIL      PASS
 │         │
 │         ▼
 │      Render
 │         │
 │         ▼
 │    Deploy automático
 │
 ▼
Despliegue bloqueado
```

## Ejecución local

### Instalar dependencias

```bash
npm install
```

### Ejecutar los tests

```bash
npm test
```

### Resultado esperado

```text
PASS tests/saludo.test.js

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

## Integración continua

La integración continua se realiza mediante GitHub Actions utilizando el archivo:

```text
.github/workflows/tests.yml
```

Cada vez que se realiza un push a la rama principal (`main`), se ejecutan automáticamente los tests definidos en el proyecto.

## Despliegue continuo

Render está conectado al repositorio mediante OAuth y monitoriza la rama principal.

Cuando GitHub recibe un nuevo commit:

* Se ejecutan los tests.
* Si los tests son correctos, Render realiza el despliegue.
* Si existe un error, el despliegue se bloquea.

## Gestión de incidencias y rollback

Durante las pruebas se provocó un fallo controlado para comprobar el comportamiento del sistema.

### Detección

Render detectó el error durante el proceso de despliegue y registró la incidencia en los logs.

### Recuperación

Se utilizó la funcionalidad de rollback disponible en Render para restaurar una versión estable previamente desplegada.

### Resultado

La aplicación volvió a funcionar correctamente utilizando una versión anterior validada.

## Diferencia entre entornos

### Entorno local

Zona donde el desarrollador realiza cambios y ejecuta pruebas antes de publicar el código.

### Repositorio GitHub

Almacena el código fuente y ejecuta automáticamente los tests mediante GitHub Actions.

### Entorno Render

Entorno de producción encargado de desplegar y publicar la aplicación para los usuarios finales.

## Aplicación desplegada

https://app-render-sencilla.onrender.com/

## Evidencias recopiladas

* Creación del repositorio.
* Configuración de Render.
* Ejecución correcta de tests.
* Ejecución fallida de tests.
* Logs de Build y Deploy.
* Aplicación desplegada.
* Simulación de fallo.
* Rollback realizado.
* Recuperación de la aplicación.

## Autor

Proyecto desarrollado como práctica de despliegue continuo, pruebas automatizadas y gestión de incidencias utilizando GitHub, GitHub Actions y Render.
