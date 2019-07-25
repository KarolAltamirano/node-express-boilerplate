# Node Express Boilerplate

# Features
- Typescript
- ESLint
- Express

# Requirements
- NodeJS v6.0 or newer
- npm v3.3 or newer

# Quick start of new project
- clone boilerplate by running
  `git clone --depth 1 https://github.com/KarolAltamirano/node-express-boilerplate.git new-project`
- go to project folder `cd new-project`
- remove existing `.git` folder and `CHANGELOG.md` and `LICENSE.md` files
- write app name and version to `package.json`
- run `git init`
- run `npm install`
- run `npm run dev` for development
- build production version by running `npm run build`

# Existing project
- clone repository
- run `npm install`
- run `npm run dev` for development
- build production version by running `npm run build`

# Configure credentials for accessing logs
- create `.env` file in root directory of your project
- define `LOGS_USERNAME` variable inside it
- define `LOGS_PASSWORD` variable inside it that contains `sha1` encrypted password
- to access log files navigate to `/logs` route in a browser

Example `.env` file:
```
LOGS_USERNAME=admin
LOGS_PASSWORD=40bd001563085fc35165329ea1ff5c5ecbdbbeef
```

# Folders structure
```
.
├─── dist       : built app (do not push to source control)
├─── logs       : app log files (do not push to source control)
├─── public     : static files
├─── src        : source files
└─── test       : unit tests
```

# Tasks
```
npm start             : start production built app
npm run clean         : clean dist folder
npm run lint          : run linter
npm run lint:watch    : run linter in watch mode
npm run dev           : start development
npm run build         : build for production
npm test              : run unit tests
npm run test:watch    : run unit tests in watch mode
npm run leasot        : print all TODOs and FIXMEs to the console
npm run check:all     : run 'lint' and 'test' tasks
npm run hooks:install : install git hooks
```
