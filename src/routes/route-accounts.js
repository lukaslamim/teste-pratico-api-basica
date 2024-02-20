import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { ConsultAccountController } from "../controllers/consult-account-controller.js";
import { CreateAccountController } from "../controllers/create-account-controller.js";
import { UpdateAccountController } from "../controllers/update-account-controller.js";
import { DeleteAccountController } from "../controllers/delete-account-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.get("/account/:id", new ConsultAccountController().handle);
router.post("/account", new CreateAccountController().handle);
router.patch("/account/:id", new UpdateAccountController().handle);
router.delete("/account/:id", new DeleteAccountController().handle);

export default router;