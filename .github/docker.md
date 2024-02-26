# Docker 🦈

Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.

Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation.

- Original author(s) - **Solomon Hykes**
- Developer(s) - Docker, Inc.
- Initial Release - March 20, 2013; 10 years ago.
- Written in Go
- Operating system - Linux, Windows, macOS
- Platform - x86-64, ARM, s390x, ppc64le
- Type - OS-level virtualization
- License - Apache-2.0 license
- Official Website - <https://docker.com/>

## How to Use and Install ?

Step 0 : Connect Your System to Good Network and Reliable bandwidth and ping.

Step 1 : Open Your Favorite Web Browser and Download DockerDesktop Setup from <https://www.docker.com/products/docker-desktop/>

Step 2 : Run the Setup With Admin / Root Level Privileges.

Step 3 : Add Your User to `docker-users` group in your system.

Step 4 : Enable Necessary Features like `wsl` or `hyper-v` in Windows to run docker engine.

Step 5 : Restart or Reboot the System to Save Some Necessary changes. _Must_

Step 6 : Start Docker Desktop and Docker Engine Services in the system.

Step 7 : Configure Docker Engine and GUI using Docker Desktop and Set Limits upon hardware usage.

**Congratulations ! You've Successfully Installed Docker in your system to understand the power of Containers.**

## **What is a Container** ?

A container is a lightweight, standalone, executable software package that includes everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings. Containers are isolated from each other and from the underlying host system, allowing applications to run consistently across different environments.

Containers leverage operating system-level virtualization to provide a consistent runtime environment regardless of the host system's configuration. Docker, a popular containerization platform, uses container images as the basis for creating and running containers. These images contain a snapshot of a container's filesystem, including the application code and all its dependencies.

Containers offer several benefits, including portability, scalability, and efficiency. They allow developers to package applications with all their dependencies and run them in a consistent environment, whether it's on a developer's laptop, in a test environment, or in production. Containers also enable organizations to deploy and manage applications more efficiently, by abstracting away the underlying infrastructure and providing a lightweight, portable runtime environment.

## **What is a Image** ?

In Docker, an image is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software. It serves as the basis for creating containers. An image contains the application code, runtime, system tools, libraries, and settings required for the application to run in a containerized environment.

Docker images are typically built using a Dockerfile, which is a text file that contains instructions for building the image. These instructions specify the base image, dependencies, environment variables, and other configuration settings needed for the application.

Images are stored in a registry, such as Docker Hub, which is a centralized repository for sharing and distributing Docker images. Developers can pull existing images from a registry to use as a base for their own images or push their custom images to a registry for others to use.

Images are immutable, meaning they cannot be changed once they are created. However, they can be layered on top of each other using a technique called layering. Each instruction in a Dockerfile adds a new layer to the image, allowing for efficient reuse of common components across multiple images.

## Docker Commands - Docker CLI

*`my-nginx`* is the name of container

### Starting and Stopping Containers

`$ docker start my-nginx` - **Starting**

`$ docker stop my-nginx` - Stopping

`$ docker restart my-nginx` - Restarting

`$ docker pause my-nginx` - Pausing

`$ docker unpause my-nginx` - Unpausing

`$ docker wait my-nginx` - Blocking a Container

`$ docker kill my-nginx` - Sending a SIGKILL

`$ docker attach my-nginx` - Connecting to an Existing Container

## Retrieving Information

*`my-nginx`* is the name of container

`$ docker ps` - List running containers

`$ docker ps -a` - List all containers

`$ docker logs my-nginx`  - Container Logs

`$ docker inspect my-nginx`  - Inspecting Containers

`$ docker events my-nginx`  - Containers Events

`$ docker port my-nginx`  - Public Ports

`$ docker top my-nginx`  - Running Processes

`$ docker stats my-nginx`  - Container Resource Usage

`$ docker diff my-nginx` - Lists the changes made to a container.

## Danger Commands

- Cleans up dangling images, containers, volumes, and networks (ie, not associated with a container) -
`$ docker system prune`

- Additionally, remove any stopped containers and all unused images (not just dangling images) -
`$ docker system prune -a`

- Stop all running containers - `$ docker stop $(docker ps -a -q)`

- Delete stopped containers - `$ docker container prune`

- Remove all dangling (not tagged and is not associated with a container) images - `$ docker image prune`

- Remove all images which are not used by existing containers - `$ docker image prune -a`

- Remove all volumes not used by at least one container - `$ docker volume prune`
