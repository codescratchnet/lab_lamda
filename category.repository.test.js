const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
//const faker = require("faker");
const { Pool } = require('pg');
const pgPool = require('pg-pool');
const CategoryRepository = require("./category.repository");


describe("CategoryRepository", function () {

    describe("getCategory", function () {
        it("should retrieve a categories", async function () {

            //arrange
            const stubValue = {
                requestId: 'abcede',
                category_names: [ 'อาหารแห้ง', 'เครื่องดื่มและขนมขบเคี้ยว' ]
              };

            //act
            const stubQueryInJsonString = "{\"command\":\"SELECT\",\"rowCount\":2,\"oid\":null,\"rows\":[{\"category_names\":\"อาหารแห้ง\",\"createdAt\":\"2021-01-19T04:51:25.100Z\",\"updatedAt\":\"2021-01-19T04:51:25.100Z\"},{\"category_names\":\"เครื่องดื่มและขนมขบเคี้ยว\",\"createdAt\":\"2021-01-19T04:51:50.911Z\",\"updatedAt\":\"2021-01-19T04:51:50.911Z\"}],\"fields\":[{\"name\":\"category_names\",\"tableID\":20608,\"columnID\":2,\"dataTypeID\":1043,\"dataTypeSize\":-1,\"dataTypeModifier\":259,\"format\":\"text\"},{\"name\":\"createdAt\",\"tableID\":20608,\"columnID\":3,\"dataTypeID\":1184,\"dataTypeSize\":8,\"dataTypeModifier\":-1,\"format\":\"text\"},{\"name\":\"updatedAt\",\"tableID\":20608,\"columnID\":4,\"dataTypeID\":1184,\"dataTypeSize\":8,\"dataTypeModifier\":-1,\"format\":\"text\"}],\"_parsers\":[null,null,null],\"_types\":{\"_types\":{\"arrayParser\":{},\"builtins\":{\"BOOL\":16,\"BYTEA\":17,\"CHAR\":18,\"INT8\":20,\"INT2\":21,\"INT4\":23,\"REGPROC\":24,\"TEXT\":25,\"OID\":26,\"TID\":27,\"XID\":28,\"CID\":29,\"JSON\":114,\"XML\":142,\"PG_NODE_TREE\":194,\"SMGR\":210,\"PATH\":602,\"POLYGON\":604,\"CIDR\":650,\"FLOAT4\":700,\"FLOAT8\":701,\"ABSTIME\":702,\"RELTIME\":703,\"TINTERVAL\":704,\"CIRCLE\":718,\"MACADDR8\":774,\"MONEY\":790,\"MACADDR\":829,\"INET\":869,\"ACLITEM\":1033,\"BPCHAR\":1042,\"VARCHAR\":1043,\"DATE\":1082,\"TIME\":1083,\"TIMESTAMP\":1114,\"TIMESTAMPTZ\":1184,\"INTERVAL\":1186,\"TIMETZ\":1266,\"BIT\":1560,\"VARBIT\":1562,\"NUMERIC\":1700,\"REFCURSOR\":1790,\"REGPROCEDURE\":2202,\"REGOPER\":2203,\"REGOPERATOR\":2204,\"REGCLASS\":2205,\"REGTYPE\":2206,\"UUID\":2950,\"TXID_SNAPSHOT\":2970,\"PG_LSN\":3220,\"PG_NDISTINCT\":3361,\"PG_DEPENDENCIES\":3402,\"TSVECTOR\":3614,\"TSQUERY\":3615,\"GTSVECTOR\":3642,\"REGCONFIG\":3734,\"REGDICTIONARY\":3769,\"JSONB\":3802,\"REGNAMESPACE\":4089,\"REGROLE\":4096}},\"text\":{},\"binary\":{}},\"RowCtor\":null,\"rowAsArray\":false}";
            const stubQuery = JSON.parse(stubQueryInJsonString);
            const postgreeStubQuery = sinon.stub(pgPool.prototype, 'query');
            postgreeStubQuery.onFirstCall().resolves(stubQuery);

            const categoryRepository = new CategoryRepository();
            const categories = await categoryRepository.getCategories();

            //assert
            expect(postgreeStubQuery.calledOnce).to.be.true;
            expect(categories.requestId.length).to.greaterThan(0);
            expect(categories.category_names[0]).to.equal(stubValue.category_names[0]);
            expect(categories.category_names[1]).to.equal(stubValue.category_names[1]);
        });
    });
});
