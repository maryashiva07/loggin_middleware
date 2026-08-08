// Challenge- Create a Server with Middleware for Logging

const express = require("express");
const app = express();


// custom logger

const logger = (req, res, next) =>{
     console.log(`${req.method} request made to ${req.url}`);
     next();
}

app.use(logger);

//get
app.get("/products", (req, res)=>{
      console.log("Here is the list of all products.");
});

//post products
app.post("/products", (req, res)=>{
     console.log("A new product has been added.");
});

//get categories
app.get("/categories", (req, res)=>{
     console.log("Here is the list of all categories.");
});

//post
app.post("/categories", (req, res)=>{
     console.log("A new category has been created.");
});


const port = 4000;

app.listen(port, ()=>{
     console.log("App is running on Port: ", port);
})
