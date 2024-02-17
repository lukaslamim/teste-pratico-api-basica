import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class DeleteAccount {
  async execute(id) {
    const response = await new RepositoryAccount().delete(id);
    return response;
    //return await new RepositoryAccount().delete(id);
  }
}