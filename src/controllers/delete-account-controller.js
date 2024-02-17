import { DeleteAccount } from "../usecases/delete-account.js";

export class DeleteAccountController {
  async handle(req, res) {
    const { id } = req.id;
    const response = await new DeleteAccount().execute(id);
    return res.status(200).send(response);
  }
}