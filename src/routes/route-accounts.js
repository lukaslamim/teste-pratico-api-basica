import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { CreateAccountController } from "../controllers/create-account-controller.js";
import { DeleteAccountController } from "../controllers/delete-account-controller.js";
import { UpdateAccountController } from "../controllers/update-account-controller.js";
import { ConsultAccountController } from "../controllers/consult-account-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.post("/accounts", new CreateAccountController().handle);
router.get("/accounts/:id", new ConsultAccountController().handle);
router.delete("/accounts/:id", new DeleteAccountController().handle);
router.patch("/accounts/:id", new UpdateAccountController().handle);

export default router;