## Authentication with JWT (JSON Web Token) Strategy | Passport.js | Node.js

### Description

This is a simple login system using authentication in Node.js with express, passport.js, jsonwebtoken. This authentication using JWT strategy.

### Dependency NPM Package

- `express`               for handling your routes
- `passport`              to handle user authentication
mechanism)
- `passport-jwt`          to handle user authenticating with JWT strategy
- `sequelize`             ORM for storing users in the database
- `pg`                    Non-blocking PostgreSQL client for Node.js
- `bcrypt`                for encrypting your passwords before you store them in your database. It’s a necessity to never store passwords in plain text for obvious security reasons.
- `morgan`                HTTP request logger middleware for node.js 
- `jsonwebtoken`          An implementation of JSON Web Tokens.

Routes:

```
GET    /api/v1                        """API Index"""
POST   /api/v1/auth/register          """Register POST handle"""
POST   /api/v1/auth/login             """Login POST handle"""
GET    /api/v1/auth/whoami            """User JSON data"""
POST   /api/v1/auth/logout            """Logout handle"""
```

### Instalation

**1. Clone the source code**

```
$ git clone https://github.com/ridhanf/node-auth-jwt.git
$ cd node-auth-jwt
```

**2. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Project dependencies listed in `package.json`.

```
$ npm install
```

**3. Run the server**

Run server with:

```
$ npm run start
```

or

```
$ npm run dev
```

&nbsp;

Server listening in port 3000 (open http://localhost:3000)
Make sure you use API testing tool like Postman or Insomnia.
That's all. Thank you.

&nbsp;

Sincerely,

Ridhan Fadhilah
