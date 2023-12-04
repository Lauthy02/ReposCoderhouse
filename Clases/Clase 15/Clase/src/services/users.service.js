import { usersMongo } from '../persistence/daos/users.mongo.js';
import { hashData } from '../utils.js';
import { UserNotFoudError } from './users-not-found-error.js';

class UsersService {
    async finAll() {
        const response = await usersMongo.getAll();
        return response
    }

    async finById(id) {
        const response = await usersMongo.getById(id);
        if (!response) {
            throw new UserNotFoudError(id)
        }
        return response
    }

    async finByEmail(email) {
        const respone = await usersMongo.getUserByEmail(email)
        return response
    }

    async creOne(user) {
        const { password } = user;
        const hashedPassword = await hashData(password);
        const response = await usersMongo.createOne({ ...user, password: hashedPassword });
        return response
    }

    async updById(entity) {
        const { id, ...user } = entity;
        const respone = await usersMongo.updateById(id, user);
        return response
    }

    async delById(id) {
        const response = await usersMongo.deleteById(id);
        return response
    }
}

export const usersService = new UsersService()