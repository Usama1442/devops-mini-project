# DevOps Mini Project

A simple web application deployed end to end with modern DevOps tools: containerized with Docker, built and published by GitHub Actions, run on Kubernetes (k3s) on AWS EC2, with server setup automated by Ansible.

## Project Overview

**Application → GitHub → GitHub Actions → Docker build → GHCR → Kubernetes (k3s) → AWS EC2**

| Stage | Tool | What it does |
| --- | --- | --- |
| Source | GitHub | Stores the code and triggers the pipeline |
| CI | GitHub Actions | Builds the Docker image on every push |
| Registry | GHCR | Stores the built image |
| Orchestration | Kubernetes (k3s) | Runs the app with 2 replicas |
| Infrastructure | AWS EC2 | Hosts the k3s cluster |
| Configuration | Ansible | Automates server setup |

## Application

The web application is in the `Application/` directory:

- `index.html` - page structure
- `style.css` - styling
- `script.js` - functionality

## Technologies

- Linux / Ubuntu
- Git and GitHub
- Docker
- Kubernetes (k3s)
- AWS EC2
- GitHub Actions
- GitHub Container Registry (GHCR)
- Ansible

## Repository Structure

```
devops-mini-project/
├── .github/workflows/   # GitHub Actions pipeline
├── Application/         # Web app (HTML, CSS, JS)
├── ansible/             # Server configuration
├── k8s/                 # Kubernetes manifests
├── Dockerfile
└── README.md
```

## Docker

Build the image:

```bash
docker build -t devops-mini-app:latest .
```

Run it locally:

```bash
docker run -d -p 8080:[container port] devops-mini-app:latest
```

Then open `http://localhost:8080`.

## CI/CD Pipeline

On every push to GitHub, GitHub Actions builds the Docker image and pushes it to GitHub Container Registry (GHCR), ready for deployment.

Deployment to the cluster: [manual with kubectl / automated - write which one].

## Kubernetes Deployment

The app runs on k3s on an AWS EC2 instance with 2 replicas, exposed through a NodePort service.

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
```

Open the app at `http://<EC2-public-IP>:<NodePort>`. The NodePort must be allowed in the EC2 security group.

## Ansible

Ansible automates server configuration on the EC2 instance: [for example, installing k3s / Docker].

## Screenshots

![App running](screenshots/app.png)
![Pods running](screenshots/pods.png)

## What I Learned

- Automating build and publish with CI/CD
- Containerizing an application with Docker
- Running and managing workloads on Kubernetes
- Provisioning and configuring servers with Ansible

## Author

**Usama Gohar**

- GitHub: https://github.com/Usama1442
- LinkedIn: https://linkedin.com/in/usama-gohar-a33a35339
