import { GetAccount } from "../usecases/get-account.js";

export class GetAccountController {
    async handle(req, res) {
        const response = await new GetAccount().execute(req.params.id);
        return res.status(200).send(response);
    }
}