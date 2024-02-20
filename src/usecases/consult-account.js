import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class ConsultAccount {
    async execute(id) {
        const response = await new RepositoryAccount().get(id);
        return response;
        //return await new RepositoryAccount().fetch();
    }
}