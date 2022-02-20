# TERN Half-Stack Starter
**T** Typescript
**E** Expressjs
**R** Reactjs
**N** NodeJs

React/Typescript frontend with Express/Node backend in a single project.



# Why?
Keeping up with seperate projects for front and backend is tedious, particularly if you're just trying to prototype. 
This stack (hopefully) makes it easy to jump in and start coding, without a lot of overhead.

# Getting Started
Just run
`npm run-script build`
to get started. The Node server is app.ts, while the React frontend is index.tsx. All changes are monitored and repackaged on save using nodemon. The default port for the Node server is 3000. 

I've also included a Dockerfile for basic containerization. Just run `docker build -t tern-starter .` and something like `docker run -p 3000:3000 tern-starter` to get that up and running.