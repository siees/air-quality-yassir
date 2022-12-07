# air-quality-yassir

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         |
| ----------------------------- | ------------------------------------|
|IQAIR_API_KEY           | IQAir API key            |
|MONGO_URI           | MongoDB URI            |


# Getting started
- Clone the repository
```
git clone  https://github.com/siees/air-quality-yassir.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`

- API Document endpoints

  swagger-ui Endpoint : http://localhost:3000/documentations
  
  ## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/common**      |  Common modules to be used across your app. |
| **src/helper**              | contain helper modules  |
| **src/jobs**      | Contain all CRON jobs |
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/routes**           | Contain all express routes, separated by endpoint as well as their swagger documentaion  |                    
| **src/test**      | test framework setup files |
| **src**/app.ts         | Entry point to express app   | 
| **src**/index.ts         | Entry point to server   | 
| package.json             | Contains npm dependencies as well as build scripts  |
| tsconfig.json            | Config settings for compiling source code only written in TypeScript    |



### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on src/index.ts. Can be invoked with `npm start`                  |                                 |
| `test`                    | Runs build and run tests using Jest        |
