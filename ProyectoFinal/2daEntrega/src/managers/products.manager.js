import { productsModel } from "../database/models/products.models.js"
import BasicManager from "./basic.manager.js"

class ProductsManager extends BasicManager {
    constructor() {
        super(productsModel)
    }

    async Find(obj) { //para trabajar con paginate en el shema tengo q modificar cosas
        const { limit = 10, page = 1, sort: sortPrice="asc", ...queryFilter } = obj
        const result = await productsModel.paginate(queryFilter, {
            limit,
            page,
            sort: { price: sortPrice === "asc" ? 1 : -1 },
            lean: true,
        })
        const info = {
            count: result.totalDocs,
            pages: result.totalPages,
            prev: result.hasPrevPage ? `http://localhost:8080/api/products?page=${result.prevPage}` : null,
            next: result.hasNextPage ? `http://localhost:8080/api/products?page=${result.nextPage}` : null,
        }
        return {info, products: result.docs}
    }    
}

const productsManager = new ProductsManager()
export default productsManager