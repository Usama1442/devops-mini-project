# DevOps Mini Project

A simple web application deployed using modern DevOps tools and practices.

## Project Overview

This project demonstrates a complete DevOps workflow:

**Application → GitHub → Docker → GitHub Actions → GHCR → Kubernetes → AWS EC2**

Ansible is also used to automate server configuration.

## Application

The web application is located in the `Application/` directory.

It contains:

- `index.html` - Application structure
- `style.css` - Application styling
- `script.js` - Application functionality

## Technologies

- Linux / Ubuntu
- Git
- GitHub
- Docker
- AWS EC2
- Kubernetes (k3s)
- GitHub Actions
- GitHub Container Registry (GHCR)
- Ansible

## Docker

Build the Docker image:

```bash
docker build -t devops-mini-app:latest .
exit
:wq
q
