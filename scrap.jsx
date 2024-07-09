Package Json
{
    "name": "fauxshop",
    "version": "1.0.0",
    "description": "eCommerce application",
    "type": "module",
    "main": "server.js",
    "scripts": {
      "start": "node backend/server.js",
      "server": "nodemon backend/server.js",
      "client": "npm run dev --prefix frontend",
      "dev": "concurrently \"npm run server\" \"npm run client\"",
      "data:import": "node backend/seeder.js",
      "data:destroy": "node backend/seeder.js -d",
      "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  
    },
    "author": "Garrett Swink",
    "license": "MIT",
    "dependencies": {
      "bcryptjs": "^2.4.3",
      "colors": "^1.4.0",
      "cookie-parser": "^1.4.6",
      "cors": "^2.8.5",
      "express": "^4.19.2",
      "jsonwebtoken": "^9.0.2",
      "mongoose": "^8.3.4",
      "multer": "^1.4.5-lts.1",
      "node": "^18.20.4"
    },
    "devDependencies": {
      "concurrently": "^8.2.2",
      "dotenv": "^16.4.5",
      "nodemon": "^3.1.4"
    },
    "engines": {
      "node": ">=14.0.0",
      "npm": ">=6.0.0"
    }
  }
  
  fauxshop@1.0.0 build
  > npm install && npm install --prefix frontend && npm run build --prefix frontend
  /opt/render/project/src/node_modules/.bin/node: 1: /opt/render/project/src/node_modules/.bin/node: �����: not found
  /opt/render/project/src/node_modules/.bin/node: 2: /opt/render/project/src/node_modules/.bin/node: Syntax error: word unexpected (expecting ")")
  ==> Build failed 😞