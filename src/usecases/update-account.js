import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class UpdateAccount {
  async execute(id, data) {
    const response = await new RepositoryAccount().update(id, data);
    return response;
    //return await new RepositoryAccount().update(id, data);
  }
}