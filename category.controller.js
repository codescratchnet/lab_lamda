class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }


  async getCategories(req, res) {
  
    const result =  await this.categoryService.getCategories();
       
    //let cats = JSON.stringify(result);
    //res.send(cats);      

    // console.log("result in controller");
    // console.log(result);

    // return res.json({
    //  "category_names" : cats
    // });
    return  res.json(result);
  }
}

module.exports = CategoryController;
