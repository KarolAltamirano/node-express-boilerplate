# Node Express Boilerplate

#Features
- ES6 + Stage 0
- Babel
- Flow
- ESLint
- Express

# Quick start
- git clone --depth 1 https://github.com/KarolAltamirano/node-express-boilerplate.git new-project
- cd new-project
- remove existing .git folder and CHANGELOG.md and LICENSE.md files
- write app name and version to package.json
- npm install
- npm run dev

# Requirements
- NodeJS v4.0 or newer
- npm v3.3 or newer

# Folders structure
```
.
├─── dist   : built app
├─── public : built frontend app
├─── src    : source files
└─── test   : unit tests
```

# NPM tasks
```
npm start          : start production built app
npm run clean      : clean dist folder
npm run lint       : run JavaScript linter
npm run lint:watch : run JavaScript linter in watch mode
npm run dev        : start development
npm run build      : build for production
npm test           : run unit tests
npm run test:watch : run unit tests in watch mode
mpm run flow       : run flow
```
