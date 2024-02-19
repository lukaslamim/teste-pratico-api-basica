import {AccountSchema} from "../schema/schema-accounts.js";

export class RepositoryAccount {
    async post(data) {
        return await AccountSchema.post({data});
    }

    async delete(id) {
        return await AccountSchema.delete({ _id: id });
    }

    async get(id) {
        return await AccountSchema.get({ _id: id });
    }

    async update(id, data) {
        return await AccountSchema.update({ _id: id, data });
    }

    async findAll() {
        return await AccountSchema.find();
    }
}