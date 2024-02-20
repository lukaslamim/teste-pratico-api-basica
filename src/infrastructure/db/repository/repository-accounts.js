import {AccountSchema} from "../schema/schema-accounts.js";

export class RepositoryAccount {

    async findAll() {
        return await AccountSchema.find();
    }

    async get(id) {
        return await AccountSchema.findById(id);
    }

    async post(data) {
        return await AccountSchema.create(
            {nome: data.nome, cnpj: data.cnpj}
        );
    }
    async delete(id) {
        return await AccountSchema.findByIdAndDelete(id);
    }
    async patch(id, data) {
        return await AccountSchema.findByIdAndUpdate(id,
            {nome: data.nome, cnpj: data.cnpj}
        );
    }
}