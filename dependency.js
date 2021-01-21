const CategoryRepository = require("./category.repository");
const CategoryService = require("./category.service");

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
module.exports = {
  categoryRepository,
  categoryService
};
