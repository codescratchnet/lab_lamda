
const { categoryService } = require("./dependency");
const bodyParser = require("body-parser");
var cors = require('cors');
const express = require('express');
const app = express();

const CategoryController = require("./category.controller");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const categoryController = new CategoryController(categoryService);

app.get("/", (req, res) => categoryController.getCategories(req, res));

module.exports = app;

