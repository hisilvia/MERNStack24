//API - Application Programming Interface

//Restful
//http - <verbs, request, response>
//let http = require('http')
//http.get()

//Every time we do hteep methods, we need to handle:
//cookies, sessions, query string, route param
//json - data type, size - of data passed

// re-inventig the wheel <when we do everything togather>

// express - a complete package for building the restful application

// express - package is present on npm.js .org

// command line tools to build node applications
// npm - node package manager tool is used to create setup
// yarn - can also be used to create node application

// commands used

// npm - init <to initialize the application> <package.json - is created>

// to install the package

// npm install <package name> 
// npm i <package name>

// once installed it adds to the dependency field
// also creates a new folder with name <node_modules>

//npm commands are registered in package.json in scripts tag

//2024/11/06  New topics will be these three below:
//mongodub - using mongoose
//post calls
//jwt token auth

// mongoose - orm {object relationship manager} <json => mapped with backend document based no-sql structure>
// bson
[ //collections - users
    { //document1 (row1) - user1 
        username : "Yao", //
        address1 : {

        },
        address2 : {

        }
    },
    { //document2 (row2) - user2
        username : "Windie",
        address1 : {

        },
        address2 : {

        },
        address3 : {

        }
    }
]