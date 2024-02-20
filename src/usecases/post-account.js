import {RepositoryAccount} from '../infrastructure/db/repository/repository-accounts.js';

export class PostAccount {
  async execute(data) {
    const response = await new RepositoryAccount().post(data);
    return response;
    //return await new RepositoryAccount().create(data);
  }
}