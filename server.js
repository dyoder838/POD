// Express App
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Controllers
const indexController = require("./controllers/indexController");
const parentController = require("./controllers/parentController");
const teacherController = require("./controllers/teacherController");
const studentController = require("./controllers/studentController");
// const podController = require("./controllers/podController");
app.use(indexController);
app.use("/api/parents",parentController);
app.use("/api/teachers",teacherController);
app.use("/api/students",studentController);
// app.use("/api/pods",podController);

// Databse Models  
const db = require("./models");
const PORT = process.env.PORT || 8080;

// Start App
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
    });
});
