
const { categoryService } = require("./dependency");

const CategoryController = require("./category.controller");


exports.handler  = async function (event, context)  {    

    let data = 'What the hell lamda';

    // const categoryController = new CategoryController(categoryService);
    
    // try {
    //     data = await categoryController.getCategories(req, res);
    // }
    // catch (err) {
    //     console.log(err);
    //     return err;
    // }

    return data;
};