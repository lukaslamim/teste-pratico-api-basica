import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class CreateAccount {
  async execute(id, data) {
    const response = await new RepositoryAccount().post(id, data);
    return response;
    //return await new RepositoryAccount().create(data);
  }
}