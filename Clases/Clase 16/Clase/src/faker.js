import {faker} from "@faker-js/faker";

export const generateUser = () => {
    const products = []
    for (let i = 0; i < faker.number.int(10); i++) {
        products.push(generateProduct())
    }
    const user = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        city: faker.location.city(),
        password: faker.internet.password(),
        cart: products
    }
    return user
}

export const generateProduct = () => {
    const product = {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        stock: faker.number.int(100)
    }
    return product 
}