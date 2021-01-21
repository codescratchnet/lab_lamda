const { Pool } = require('pg');

class CategoryRepository {
    constructor() {

    }

    async getCategories() {

        const pool = new Pool({
            user: `lotustoyou`,
            host: `ecommerce-dev-eks-postgres-db-clusters-sg.cluster-chafn2lvkcdb.ap-southeast-1.rds.amazonaws.com`,
            database: `lotustoyou`,
            password: `h2P5YBEYrt`,
            port: 5432
        });

        let result = {
            "requestId" : "",
            "category_names": []
        }


        try {
            const res = await pool.query('select * from public.categories LIMIT 10 OFFSET 0;')

            // console.log("Deserialize reponse from query");
            // console.log("\n");
            let jsonRes = JSON.stringify(res);
            //console.log(jsonRes);

            let data = {
                "requestId" : "",
                "category_names": []
            };

            data.requestId = 'abcede';
            data.category_names = (res.rows || []).map(x => x.category_names);
            // console.log("Deserialize Result result");
            // console.log("\n");
            // console.log(data);

            result = data;            
        } catch (err) {
            console.log(err.stack)
        }
        
        return result;


       
    }
}

module.exports = CategoryRepository;
