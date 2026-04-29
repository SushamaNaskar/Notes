# Dockerfile
- It is a text file that has all commands which need to be run for building a given image.
Script to create an image

```
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```
