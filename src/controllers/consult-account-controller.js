import { ConsultAccount } from "../usecases/consult-account.js";

export class ConsultAccountController {
    async handle(req, res) {
        const response = await new ConsultAccount().execute();
        return res.status(200).send(response);
    }
}