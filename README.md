# 📦 Inventory Dashboard

## Descripción

Inventory Dashboard es una aplicación Full Stack desarrollada como proyecto final del ramo de Cloud Computing.

La aplicación permite visualizar un inventario de productos almacenados en una base de datos MySQL y agregar nuevos productos mediante una API REST desarrollada en Node.js.

Todo el proyecto fue desplegado en Amazon EKS utilizando contenedores Docker y Kubernetes.

---

# Arquitectura

```
React + Vite
      │
      ▼
Node.js + Express (API REST)
      │
      ▼
MySQL 8
```

Todos los componentes fueron desplegados en Kubernetes sobre Amazon EKS.

---

# Tecnologías

## Frontend

- React
- Vite
- Axios
- Bootstrap

## Backend

- Node.js
- Express
- MySQL2

## Base de datos

- MySQL 8

## Contenedores

- Docker
- Docker Compose

## Kubernetes

- Namespace
- Deployment
- Service
- Secret
- ConfigMap

## AWS

- Amazon EC2
- Amazon EKS
- Amazon ECR
- Amazon S3
- Amazon VPC
- Elastic Load Balancer

---

# Funcionalidades

- Visualización del inventario
- Resumen del inventario
- Agregar nuevos productos
- API REST
- Comunicación entre Frontend, Backend y Base de Datos
- Despliegue completo en Kubernetes

---

# Despliegue

La aplicación fue desplegada en Amazon EKS utilizando imágenes almacenadas en Amazon ECR.

Componentes desplegados:

- inventory-frontend
- inventory-backend
- inventory-db

---

# Kubernetes

Principales recursos utilizados:

- Namespace
- Deployments
- Services
- ConfigMap
- Secret

---

# Docker

Cada componente posee su propio Dockerfile.

El entorno local utiliza Docker Compose para levantar:

- Frontend
- Backend
- MySQL

---

# CI/CD

El proyecto incluye un workflow de GitHub Actions que realiza la integración continua y automatiza el proceso de despliegue.

---

# Autor

**Cesar Rodriguez**

Ingeniería en Informática — Duoc UC

Proyecto Final Cloud Computing

