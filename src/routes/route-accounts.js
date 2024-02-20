import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { GetAccountController } from "../controllers/get-account-controller.js";
import { PostAccountController } from "../controllers/post-account-controller.js";
import { PatchAccountController } from "../controllers/patch-account-controller.js";
import { DeleteAccountController } from "../controllers/delete-account-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.get("/account/:id", new GetAccountController().handle);
router.post("/account", new PostAccountController().handle);
router.patch("/account/:id", new PatchAccountController().handle);
router.delete("/account/:id", new DeleteAccountController().handle);

export default router;