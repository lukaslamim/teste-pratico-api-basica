import {AccountSchema} from "../schema/schema-accounts.js";

export class RepositoryAccount {
    async create(data) {
        return await AccountSchema.create({data});
    }

    async delete(id) {
        return await AccountSchema.delete({ _id: id });
    }

    async fetch(id) {
        return await AccountSchema.fetch({ _id: id });
    }

    async update(id) {
        return await AccountSchema.update({ _id: id });
    }

    async findAll() {
        return await AccountSchema.find();
    }
}