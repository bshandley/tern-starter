# TERN Half-Stack Starter
**T** Typescript
**E** Expressjs
**R** Reactjs
**N** NodeJs

React/Typescript frontend with Express/Node backend in a single project. There is a single tsconfig file and webpack.config file for both frontend and backend.



# Why?
Keeping up with separate projects for front and backend is tedious, particularly if you're just trying to prototype. 
This stack (hopefully) makes it easy to jump in and start coding, without a lot of overhead.

**Do not run this code in production environments. This is for POCs and prototyping only.**

#Other Uses
I have included various other files for containerization, CI/CD pipelines, and Kubernetes testing. You may safely delete `Dockerfile` and `Jenkinsfile` without breaking anything. Feel free to use these files and adapt to your own needs.

# Getting Started
After installing with `npm install` just run
`npm start`
to build and run the application. The Node server is app.ts, while the React frontend is index.tsx. All changes are monitored and repackaged on save using nodemon. The default port for the Node server is 3000. 

For the Docker file, just run `docker build -t tern-starter .` to build the image and something like `docker run -p 3000:3000 tern-starter` to get it up and running.