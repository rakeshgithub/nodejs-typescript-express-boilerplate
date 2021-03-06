** Under development **

# nodejs-typescript-express-boilerplate

## What have been used

1. ExpressJS
2. TypeScript
3. TypeOrm
4. TSOA - OpenAPI-compliant
5. JWT token authantication
6. Yup schema validation

## Quick start

### Clone the repository

1.  Ensure that you have Node.js and yarn installed.
2.  Clone repository using `git clone --depth=1 https://github.com/rakeshgithub/nodejs-typescript-express-boilerplate <YOUR_PROJECT_NAME>`

### Install dependencies

1.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
2.  Run `yarn install` in order to install dependencies.<br />

### Configure database (MySql) - TypeOrm

1.  Create a database and keep database name with you
2.  Open file `./src/config/database.ts`
3.  Set the DB connection and other details

### Create TypeOrm entities

Entities are equilvent to database table in TypeOrm. You can read more on https://typeorm.io/entities. <br />
There are already few entities created for sample purpose.

### Run Migration to create database tables from entities

1. If you have created entities, then you can create the database tables automatically from those entities by running below typeorm command: <br />
   `yarn run typeorm schema:sync`

### Create your first controller

1. You can walk through `./src/controllers/AuthController.ts`
2. See how the decorators of [tsoa OpenApi](https://www.npmjs.com/package/tsoa) used to generate OpenApi document
3. You define the routes in controller using tsoa decorator and then creare route from a tsoa command on terminal (see next step)

### Create routes

We are using OpenApi for the documentation of API's so used [tsoa OpenApi](https://www.npmjs.com/package/tsoa) which is OpenAPI-compliant REST APIs using TypeScript and Node.

1. Create folder ./src/routes
2. Run `yarn run tsoa routes`
3. That command will create the the file ./src/routes/routes.ts
4. Dont edit this file ever, run `yarn run tsoa routes` everytime when you add/edit the routes in your controller

### Few other commands [TBD]

`yarn migration:run` to insert master data from ./src/migrations/\*

`yarn dev` to run the server

Swageer UI - `http://localhost:8002/docs/`

`yarn typeorm-ts-node-esm migration:create ./src/migrations/initialDatabaseEntries` - To create new migration scripts
