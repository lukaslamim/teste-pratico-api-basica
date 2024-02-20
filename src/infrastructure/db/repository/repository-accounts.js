import {AccountSchema} from "../schema/schema-accounts.js";

export class RepositoryAccount {
    async post(data) {
        //return await AccountSchema;
    }
    async delete() {
        return await AccountSchema.deleteOne({
            "id" : id
        });
    }

    async get(id) {
        return await AccountSchema.findOne({
            "id" : id
        });
    }

    async update() {
       // return await AccountSchema.updateOne();
    }

    async findAll() {
        return await AccountSchema.find();
    }
}