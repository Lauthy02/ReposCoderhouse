import { productsModel } from "../database/models/products.model.js"
import BasicManager from "./basic.manager.js"

class ProductsManager extends BasicManager {
    constructor(){
        super(productsModel)
    }

    async FindAllProducts(obj){
        const { page = 1, limit = 10, sort: sortPrice, ...queryFilter } = obj
        const products = await productsModel.paginate(queryFilter,{
            page,
            limit,
            sort: { price: sortPrice === 'asc' ? 1 : -1 },
            lean: true,
        })
        return products
    }
}

const productsManager = new ProductsManager()
export default productsManager;