# docker
- Docker is an open platform that allows us to build, ship, and run applications inside containers.
- Containers package the application along with its dependencies, ensuring it runs consistently across different environments, from development to production.
- So basically it separates the application from infrastructure so we can deliver software quickly. 

# Docker Image

## Definition:
- A Docker image is a read-only blueprint that contains an application and its dependencies.
- When we run an image, it creates a container of that image.
- Images are immutable and can be reused to create multiple containers.

<!-- A Docker image is a read-only blueprint that contains an application and its dependencies, used to create containers. -->
<!-- ## Contains application setup:
It includes the application code, dependencies, libraries, and configuration required to run the app.

## Used to create containers:
When we run an image, it creates a container (running instance) of that image.

## Immutable & reusable:
Images are unchangeable (immutable) and can be reused to create multiple containers consistently. -->

# Containers

## Definition:
- A Docker container is a running instance of a Docker image, which provides a lightweight, isolated environment to execute an application.
- Containers ensure the application runs the same in development, testing, and production.
- Unlike virtual machines, containers share the host OS, so they are faster and use fewer resources.

<!-- ## Includes everything needed:
It contains the application code along with all its dependencies, libraries, and configurations. -->

<!-- ## Consistency across environments:
Containers ensure the application runs the same in development, testing, and production.

## Lightweight & fast:
Unlike virtual machines, containers share the host OS, so they are faster and use fewer resources. -->


# Docker Image vs Container (Interview Answer)
🔹 1. Definition
Image: A read-only blueprint/template that contains the application and its dependencies.
Container: A running instance of that image.

Image → stores code + dependencies
Container → uses/runs that code + dependencies

🔹 2. State
Image: Static (does not change)
Container: Dynamic (can run, stop, and change state)

“A container is dynamic because it can transition between different states like running, stopped, or restarted during its lifecycle, unlike an image which is static.”

👉 Containers can also:
Crash and restart automatically
Be scaled (multiple containers)
Be replaced with new versions

🔹 3. Role
Image: Used to create containers
Container: Used to run the application

🔍 Clear Difference
🧱 Docker Image
Contains:
Application code
Dependencies
Libraries
Config

👉 But it is:

Static (not running)
Like a snapshot

🚀 Docker Container
Also has:
Application code
Dependencies

👉 But:
It comes from the image
It is running and executing

# Can you run multiple containers from one image?
- Yes, we can create multiple containers from the same image, which helps in scaling applications.



# Flow
“During deployment, we build a Docker image and run a container on the server. The container stays running, and when users access the website, their requests are handled by that running container.”

Build Image → Run Container (once) → Users hit running container

🔹 1. During Deployment
1. You build a Docker image
2. Push it to a registry
3. On the server: 
```
docker run ... 
```
👉 This creates and starts a container

🔹 2. When Users Access the Website
👉 The container is already running
1. User sends request → 🌐
2. Request goes to server
3. Running container handles the request

# ⚡ When Are New Containers Created?
👉 Only when:
- Scaling (multiple instances)
- Restarting container
- Deploying new version

# Docker Engine
The core service that runs containers


# Docker Hub
Online registry to store images


# How It Works (Flow)
1. Write Dockerfile
2. Build image

```
docker build -t my-app .
```

3. Run container

```
docker run -p 3000:3000 my-app
```

# 🔹 Real-Life Example (React App)

Without Docker:

Install Node
Install dependencies
Run app

With Docker:

Just run container → everything works instantly

# Advantages
Consistent environments
Faster deployment
Easy scaling
Lightweight (compared to VMs)

# 🔹 Docker vs Virtual Machine

| Feature     | Docker         | VM      |
| ----------- | -------------- | ------- |
| Size        | Small          | Large   |
| Startup     | Fast           | Slow    |
| OS          | Shares host OS | Full OS |
| Performance | High           | Lower   |

# 🔹 When to Use Docker
Microservices
CI/CD pipelines
Cloud deployment
Full-stack apps

Show React app Docker setup (step-by-step)
Give Docker interview questions
Explain Docker vs Kubernetes (very common interview topic)
Volumes (basic idea)