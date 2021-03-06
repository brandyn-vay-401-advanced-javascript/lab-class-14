# LAB - 14

## Access Control

### Author: Brandyn Vay

### Links and Resources

* [submission PR](https://github.com/brandyn-vay-401-advanced-javascript/lab-class-14)
* [travis](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-14)
* [back-end](https://bv-back-end-final.herokuapp.com/)


#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)

### Modules
#### `users-model.js`
#### `router.js`
#### `roles-model.js`

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://localhost:27017/auth
* `SECRET`

#### Running the app
* `nodemon`
* Endpoint: `/signup`
  * Returns an authorization token.
* Endpoint: `/signin`
  * returns user and role with authorization.
* Endpoint: `/public-stuff`
  * returns a `Welcome to the Public!` message.
* Endpoint: `/hidden-stuff`
  * returns a `Welcome to the Hidden Room!` message.
* Endpoint: `/something-to-read`
  * returns a `You can now Read Things!` message.
* Endpoint: `/create-a-thing`
  * returns a `You can now Make Things!` message.
* Endpoint: `update`
  * returns a `You can now Update Things!` message.
* Endpoint: `/jp`
  * returns a `You can now Update More Things!` message
* Endpoint: `/bye-bye`
  * returns a `You can now Delete Things!` message.
* Endpoint: `/roles`
  * returns role of current user.

  
#### Tests
* How do you run tests? 
  * Run npm test to start the testing process.

#### UML
![UML Diagram](https://github.com/brandyn-vay-401-advanced-javascript/lab-class-13/blob/master/assets/one-time-jwt-diagram.jpg)

#### Cheat Sheet
1. Mongo
  * show dbs - to show all databases in mongo
  * use `database name` - to go into that database
    * show collections - to show what is in the database
    * db.`collection name`.find().pretty() - to show object in the databse

2. Server
  * echo '{"username":"`name`", "password":"`password`", "role":"`role`"}' | http post :3000/`route` - this route usually is for signup
  * http :3000/`route` "authorization:bearer `token`" - this is usually for checking authintacation for the route
