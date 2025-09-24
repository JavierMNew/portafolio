---
company: BIMO
title: Sistema de Gestión de Inventario ERP
description: Módulo ERP personalizado para Bimo, empresa de biología molecular. Desarrollé componentes clave como gestión de artículos, movimientos, requisiciones y control de accesos por roles.
logo: /bimo-logo.png
imgs:
  main: "bimo-almacen-landing"
  others: ["bimo-almacen-render-2", "bimo-almacen-catalogos-1"]
links:
  demo: https://github.com/Arellanox/nuevo_checkup
  github: https://github.com/Arellanox/nuevo_checkup
tecnologias: ["PHP", "JavaScript", "MySQL", "Bootstrap"]
esPersonal: false
approach: Mientras nos encontrábamos en nuestras clases, representantes de la empresa BIMO visitaron nuestra universidad para impartir una charla dirigida a los estudiantes de quinto cuatrimestre que estaban por iniciar su estadía. Debido a una confusión en la programación, creyeron que nuestro grupo también estaba por comenzar esa etapa, cuando en realidad aún nos faltaban ocho meses. Aun así, vi la visita como una oportunidad y, al finalizar la charla, me acerqué al ingeniero en sistemas y a la licenciada de recursos humanos de la empresa. Les compartí mi interés en colaborar con ellos y mi entusiasmo por aprender, dejando en claro que estaba dispuesto a dedicar tiempo después de clases si me brindaban la oportunidad. El ingeniero respondió de manera positiva y me invitó a mantener el contacto. Como resultado, en noviembre de 2024 comencé a colaborar con BIMO bajo un esquema no contractual, enfocado en entregables específicos. Esta experiencia marcó el inicio de una etapa profesional valiosa y formativa.
order: 2
active: true
deliverables:
  - title: "Sistema de Gestión de Artículos"
    description: "Módulo completo para alta, baja, modificación y vista de productos con control de categorías, proveedores y especificaciones técnicas."
    img: "bimo-almacen-vista-inventarios"
    features:
      - title: "Catálogo completo de artículos"
        description: "Sistema de gestión de inventario con más de 500 productos catalogados, incluyendo reactivos, consumibles y equipos de laboratorio."
      - title: "Clasificación por categorías y proveedores"
        description: "Organización jerárquica de productos por tipo, proveedor y ubicación física en el almacén."
      - title: "Control de especificaciones técnicas"
        description: "Registro detallado de especificaciones técnicas, fechas de caducidad y condiciones de almacenamiento para cada producto."
      - title: "Validación de datos en tiempo real"
        description: "Sistema de validación que previene errores en el ingreso de datos y mantiene la integridad de la información."
    metrics:
      - label: "Artículos gestionados"
        value: "500+"
      - label: "Categorías organizadas"
        value: "25"
      - label: "Proveedores registrados"
        value: "15+"
  - title: "Sistema de Gestión de Movimientos"
    description: "Dashboard con monitoreo automático de stock, alertas de productos críticos y seguimiento de niveles mínimos y máximos."
    img: "bimo-almacen-vista-movimientos"
    features:
      - title: "Monitoreo automático de stock"
        description: "Sistema de seguimiento en tiempo real del inventario con actualizaciones automáticas de stock disponible."
      - title: "Alertas de productos críticos"
        description: "Notificaciones automáticas cuando los niveles de stock están por debajo del mínimo establecido."
      - title: "Reportes de movimientos"
        description: "Registro detallado de entradas, salidas y transferencias con trazabilidad completa."
    metrics:
      - label: "Reducción de faltantes"
        value: "40%"
      - label: "Tiempo de respuesta"
        value: "<2seg"
      - label: "Movimientos diarios"
        value: "50+"
  - title: "Sistema de Requisiciones Automatizado"
    description: "Flujo completo de solicitudes con aprobación multinivel, desde petición hasta entrega con trazabilidad completa."
    img: "bimo-almacen-vista-requisiciones"
    features:
      - title: "Flujo de aprobación multinivel"
        description: "Sistema de aprobaciones escalonadas según el tipo de producto y valor de la requisición."
      - title: "Seguimiento de niveles mínimos/máximos"
        description: "Control automático de stock mínimo y máximo por producto con alertas preventivas."
      - title: "Reportes de movimientos detallados"
        description: "Histórico completo de entradas y salidas con filtros por fecha, área y tipo de movimiento."
    metrics:
      - label: "Tiempo de procesamiento"
        value: "70% menos"
      - label: "Requisiciones procesadas"
        value: "200+/mes"
      - label: "Áreas atendidas"
        value: "8"
  - title: "Sistema de Órdenes de Compra Automatizado"
    description: "Módulo para la generación, validación y seguimiento de órdenes de compra con aprobaciones escalonadas y control de proveedores."
    img: "bimo-almacen-vista-ordenes"
    features:
      - title: "Flujo de aprobación multinivel"
        description: "Sistema de aprobaciones escalonadas según el tipo de producto y valor de la requisición."
      - title: "Seguimiento de niveles mínimos/máximos"
        description: "Control automático de stock mínimo y máximo por producto con alertas preventivas."
      - title: "Reportes de movimientos detallados"
        description: "Histórico completo de entradas y salidas con filtros por fecha, área y tipo de movimiento."
    metrics:
      - label: "Tiempo de procesamiento"
        value: "70% menos"
      - label: "Órdenes de compra procesadas"
        value: "200+/mes"
      - label: "Áreas atendidas"
        value: "14"
  - title: "Sistema de Gestión de Proveedores"
    description: "Módulo para el registro, control y evaluación de proveedores, con integración a requisiciones y órdenes de compra."
    img: "bimo-almacen-vista-proveedores"
    features:
      - title: "Flujo de aprobación multinivel"
        description: "Sistema de aprobaciones escalonadas según el tipo de producto y valor de la requisición."
      - title: "Seguimiento de niveles mínimos/máximos"
        description: "Control automático de stock mínimo y máximo por producto con alertas preventivas."
      - title: "Reportes de movimientos detallados"
        description: "Histórico completo de entradas y salidas con filtros por fecha, área y tipo de movimiento."
    metrics:
      - label: "Proveedores activos"
        value: "15+"
      - label: "Órdenes vinculadas"
        value: "200+/mes"
      - label: "Áreas de abastecimiento"
        value: "14"
---

Módulo ERP enfocado en el área de almacén para **BIMO** (Biología Molecular y Análisis Clínicos), empresa reconocida por sus servicios de diagnóstico en Villahermosa, Tabasco. Este módulo incluye gestión de artículos, movimientos internos, requisiciones por área, órdenes de compra y control de permisos según rol.

El desarrollo fue realizado con tecnologías como PHP, JavaScript y MySQL, permitiendo mejorar la eficiencia operativa mediante un sistema robusto y adaptable a las necesidades internas de la empresa. El sistema maneja más de 500 productos médicos, incluyendo reactivos, consumibles y equipos de laboratorio, con un flujo de trabajo optimizado que reduce los tiempos de procesamiento en un 70% y disminuye los faltantes de inventario en un 40%.
