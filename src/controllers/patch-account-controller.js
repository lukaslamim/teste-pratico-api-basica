import { UpdateAccount } from "../usecases/update-account.js";

export class PatchAccountController {
  async handle(req, res) {
    const response = await new UpdateAccount().execute(req.params.id, req.body);
    return res.status(200).send(response);
  }
}