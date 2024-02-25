import { PatchAccount } from "../usecases/patch-account.js";

export class PatchAccountController {
  async handle(req, res) {
    const response = await new PatchAccount().execute(req.params.id, req.body);
    return res.status(200).send(response);
  }
}