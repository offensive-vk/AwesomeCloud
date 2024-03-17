# **Table of Contents**

- [**What is Docker?**](#what-is-docker)
- [**How to Use and Install?**](#how-to-use-and-install)
- [**What is a Container?**](#what-is-a-container)
- [**What is an Image?**](#what-is-an-image)
- [**Docker Commands - Docker CLI**](#docker-commands---docker-cli)
- [**Starting and Stopping Containers**](#starting-and-stopping-containers)
- [**Retrieving Information**](#retrieving-information)
- [**Docker Images**](#docker-images)
- [**Docker Containers**](#docker-containers)
- [**Docker Build**](#docker-build)
- [**Docker Run**](#docker-run)
- [**Docker Networking**](#docker-networking)
- [**Danger Commands**](#danger-commands-☠️)
- [**Author Regards 🧑‍💻**](#author-regards-🧑‍💻)


<div align="center">
<a href="https://docker.com/">
<img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/docker/docker-original-wordmark.svg" height=400 width=400 alt="docker" />
</a>
</div>

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

## Docker Commands - Docker CLI✨

Knowing the docker commands is a must in order to work with docker containers, images, volumes, and other cool stuff.

*`my-nginx`* is the name of container

## Starting and Stopping Containers

`$ docker start my-nginx` - Starting

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

## *Docker Images*

`$ docker images` - Listing images

`$ docker rmi nginx` - Removing an image

`$ docker load < ubuntu.tar.gz` - Loading a tarred repository

`$ docker load --input ubuntu.tar` - Loading a tarred repository

`$ docker save busybox > ubuntu.tar` - Save an image to a tar archive

`$ docker history` - Showing the history of an image

`$ docker commit nginx` - Save a container as an image

`$ docker tag nginx eon01/nginx` - Tagging an image

`$ docker push eon01/nginx` - Pushing an image

## *Docker Build*

`$ docker build .` - Build from here

`$ docker build github.com/user/docker-firefox` - Build from GitHub repository

`$ docker build - < Dockerfile` - Build from standard input

`$ docker build - < context.tar.gz` - Convert the image into this file

`$ docker build -t eon/my-nginx .` - Build with a specified tag

`$ docker build -f myOtherDockerfile .` - Build from a different Dockerfile

`$ curl example.com/remote/Dockerfile | docker build -f - .` - Build from a Dockerfile fetched remotely via curl

## Docker Containers

`$ docker exec -it <container> bash` - Connecting to container

`$ docker logs <container>` - Shows container's console log

`$ docker stop <container>` - Stop a container

`$ docker restart <container>` - Restart a container

`$ docker rm <container>` - Remove a container

`$ docker port <container>` - Shows container's port mapping

`$ docker top <container>` - List processes

`$ docker kill <container>` - Kill a container

`$ docker rename old_name new_name` - Renaming an container

`$ docker rm update --cpu-shares 512 -m 300M <container>` - Setting a limit for a container

## *Docker Run*

`$ docker run -d --name my_container my_image` - Create and run a container from an image

`$ docker run -it my_image` - Allocate a pseudo-TTY and keep STDIN open even if not attached

`$ docker run -p 8080:80 my_image` - Map container ports to host ports

`$ docker run -d my_image` - Run a container in the background and print container ID

`$ docker run -e "ENV_VARIABLE=value" my_image` - Set environment variables in the container

`$ docker run -v /host/path:/container/path my_image` - Mount a volume from the host into the container

`$ docker run --entrypoint "/bin/bash" my_image` - Set a custom entry point for the container

`$ docker run --name my_container my_image` - Assign a name to the container

`$ docker run --cpu-shares 512 --memory 1g my_image` - Set resource constraints on the container

`$ docker run -d my_image` - Detach from the container and leave it running in the background

`$ docker run -w /path/to/directory my_image` - Specify a working directory inside the container

## Docker Networking

Removing a network - `$ docker network rm MyOverlayNetwork`

Listing networks - `$ docker network ls`

Getting information about a network - `$ docker network inspect MyOverlayNetwork`

Connecting a running container to a network - `$ docker network connect MyOverlayNetwork nginx`
Connecting a container to a network when it starts - `$ docker run -it -d --network=MyOverlayNetwork nginx`

Disconnecting a container from a network - `$ docker network disconnect MyOverlayNetwork nginx`.

**Creating a Network*

```bash
docker network create -d overlay MyOverlayNetwork

docker network create -d bridge MyBridgeNetwork

docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

## Danger Commands ☠️

Use These Commands at your own risk.

- Cleans up dangling images, containers, volumes, and networks (ie, not associated with a container) -
`$ docker system prune`

- Additionally, remove any stopped containers and all unused images (not just dangling images) -
`$ docker system prune -a`

- Stop all running containers - `$ docker stop $(docker ps -a -q)`

- Delete stopped containers - `$ docker container prune`

- Remove all dangling (not tagged and is not associated with a container) images - `$ docker image prune`

- Remove all images which are not used by existing containers - `$ docker image prune -a`

- Remove all volumes not used by at least one container - `$ docker volume prune`

## Author Regards 🧑‍💻

- Best Regards from The [Author](https://github.com/offensive-vk) to learn something new.
- Keep Learning and One Day you'll become a better version for yourself.
- Learn to Shape, not to adapt.

> Thank you, specially for reading this last message at the end of this file.

***

<p align="center">
  <i>&copy; <a href="https://github.com/offensive-vk/">Vedansh </a> 2023 - Present</i><br>
  <i>Licensed under <a href="https://github.com/offensive-vk/AwesomeCloud#CC0-1.0-1-ov-file">CC0-1.0</a></i><br>
  <a href="https://github.com/npm-run-test"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <kbd>Thanks for visiting :)</kbd>
</p>

***
