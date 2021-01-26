// set up express app
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// set up express handlebars 
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import burger controller
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// begin server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if(err) console.error(err);
    console.log(`now listening on port ${PORT}`);
});