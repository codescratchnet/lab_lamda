const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const CategoryController = require("./category.controller");
const CategoryService = require("./category.service");
const CategoryRepository = require("./category.repository");



describe("getCategories", async function () {
  let req;
  let res;
  let categoryService;
  beforeEach(() => {
    //req = { params: { id: faker.random.uuid() } };
    res = { json: sinon.spy() };
    const categoryRepo = sinon.spy();
    categoryService = new CategoryService(categoryRepo);
  });

  it("should return all categories", async function () {
    const stubValue = {
      requestId: 'abcede',
      category_names: ['อาหารแห้ง', 'เครื่องดื่มและขนมขบเคี้ยว']
    };

    const stub = sinon.stub(categoryService, "getCategories").returns(stubValue);
    categoryController = new CategoryController(categoryService);
    const categories = await categoryController.getCategories(req, res);


    expect(stub.calledOnce).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.firstCall.args[0].requestId.length).greaterThan(0);//requestId
    expect(res.json.firstCall.args[0].category_names[0]).to.equal(stubValue.category_names[0]);
    expect(res.json.firstCall.args[0].category_names[1]).to.equal(stubValue.category_names[1]);  
  });
});