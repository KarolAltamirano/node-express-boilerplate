# Node Express Boilerplate

# Features
- ES7+
- Babel
- Flow
- ESLint
- Express

# Requirements
- NodeJS v6.0 or newer
- npm v3.3 or newer
- yarn (to install run `npm install --global yarn`)
- flow-typed (to install run `npm install -g flow-typed`)

# Quick start of new project
- clone boilerplate by running
  `git clone --depth 1 https://github.com/KarolAltamirano/node-express-boilerplate.git new-project`
- go to project folder `cd new-project`
- remove existing `.git` folder and `CHANGELOG.md` and `LICENSE.md` files
- write app name and version to `package.json`
- run `git init`
- run `yarn`
- run `flow-typed install` to install type definitions
- run `yarn run dev` for development
- build production version by running `yarn run build`

# Existing project
- clone repository
- run `yarn`
- run `yarn run dev` for development
- build production version by running `yarn run build`

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
├─── flow-typed : flow type definitions
├─── logs       : app log files (do not push to source control)
├─── dist       : built app (do not push to source control)
├─── public     : built frontend app
├─── src        : source files
└─── test       : unit tests
```

# Tasks
```
yarn run start         : start production built app
yarn run clean         : clean dist folder
yarn run lint          : run JavaScript linter
yarn run lint:watch    : run JavaScript linter in watch mode
yarn run dev           : start development
yarn run build         : build for production
yarn test              : run unit tests
yarn run test:watch    : run unit tests in watch mode
yarn run flow          : run flow
yarn run leasot        : print all TODOs and FIXMEs to the console
yarn run check:all     : run 'lint', 'flow' and 'test' tasks
yarn run hooks:install : install git hooks
```
