import { CreateAccount } from "../usecases/create-account.js";

export class CreateAccountController {
  async handle(req, res) {
      const id = req.params.id;
      const data = req.params.body;

      const response = await new CreateAccount().execute(id, data);
      return res.status(200).send(response);
  }
}