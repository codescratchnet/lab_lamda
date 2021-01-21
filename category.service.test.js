const chai = require("chai");
const sinon = require("sinon");
const CategoryRepository = require("./category.repository");
const expect = chai.expect;
const faker = require("faker");
const CategoryService = require("./category.service");

describe("CategoryService", function () {


    describe("getCategories", function () {
        it("should return a all categories ", async function () {
            const stubValue = {
                requestId: faker.random.uuid(),
                category_names: ['อาหารแห้ง', 'เครื่องดื่มและขนมขบเคี้ยว']
            };


            const categoryRepo = new CategoryRepository();
            const stub = sinon.stub(categoryRepo, "getCategories").returns(stubValue);

            const categoryService = new CategoryService(categoryRepo);
            const categories = await categoryService.getCategories();

            expect(stub.calledOnce).to.be.true;
            expect(categories.requestId.length).to.greaterThan(0);
            expect(categories.category_names[0]).to.equal(stubValue.category_names[0]);
            expect(categories.category_names[1]).to.equal(stubValue.category_names[1]);

        });
    });
});
