
//const CategoryRepository = require("./category.repository");

class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async getCategories() {
        const result = await this.categoryRepository.getCategories();
        // console.log("ServiceResult");
        // console.log(result);
        return result;
    }
}

module.exports = CategoryService;
