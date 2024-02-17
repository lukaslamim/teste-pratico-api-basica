import { UpdateAccount } from "../usecases/update-account.js";

export class UpdateAccountController {
  async handle(req, res) {
    const { id } = req.id;
    const response = await new UpdateAccount().execute(id, req.body);
    return res.status(200).send(response);
  }
}