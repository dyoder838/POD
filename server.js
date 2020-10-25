// Express App
const express = require("express");
const app = express();
const session = require("express-session");
const db = require("./models");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session({
    secret: "anything",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000
    }
}))

// Controllers
const indexController = require("./controllers/indexController");
// const studentController = require("./controllers/studentController");
const authController = require("./controllers/authController");
const podController = require("./controllers/podController");
app.use(indexController);
// app.use("/api/students",studentController);
app.use(authController);
app.use(podController);
// FIXME: I crash the server: 
    //TypeError: app.use() requires a middleware function
    //at Function.use (C:\Users\yoder\Git_Projects\POD\node_modules\express\lib\application.js:210:11)
    //at Object.<anonymous> (C:\Users\yoder\Git_Projects\POD\server.js:31:5)

// Databse Models  

// Start App
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
    });
});
