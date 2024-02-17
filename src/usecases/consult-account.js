import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class ConsultAccount {
    async execute() {
        const response = await new RepositoryAccount().fetch();
        return response;
        //return await new RepositoryAccount().fetch();
    }
}