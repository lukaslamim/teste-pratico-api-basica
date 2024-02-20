import { ConsultAccount } from "../usecases/consult-account.js";

export class ConsultAccountController {
    async handle(req, res) {
        const  id  = req.id;
        const response = await new ConsultAccount().execute(id);
        return res.status(200).send(response);
    }
}