const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')


// Handle routes
const posts = require("./routes/api/posts");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(cors())

//PORT TO RUN
const PORT = process.env.PORT || 1200;

// Db config
const db = require("./config/keys").mongoURI;

// Mongoose db connect
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("Database up and running"))
  .catch(err => console.log("Database connection failed", err));

// // HANDLE CORS
// app.use((req, res, next) => {
// //    req.header("Access-Control-Allow-Origin", "*");
// //    req.header('Access-Control-Allow-Headers', 'Origin, X-Requsted-With, Content-Type')
// //   req.header("Access-Control-Allow-Headers", "*");

// //    if (req.method === "OPTIONS") {
// //      req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
// //      return res.status(200).json({});
// //    }
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );

//   res.setHeader("Access-Control-Allow-Origin", "*");

//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//  res.setHeader(
//     "Access-Control-Allow-Headers", 
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
 
//   next();
// });

// handle users route
app.use("/api/posts", posts);

//@router test
app.get("/backend-comment", (req, res) =>{
  var s = process.env.an_env_var || ""; 
  if(s == ""){
     console.log("hello",s)
     res.send(404)
    
  }else{
    
    res.json({
    greet: "hello"
    })
    
  }
  

});

app.listen(PORT, () => {
  console.log("Server is running at port", +PORT);
});
