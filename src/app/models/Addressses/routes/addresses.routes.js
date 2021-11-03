import { Router } from "express";
import AddressesController from "../controllers/AddressesController";
import authMiddleware from "../../../../middlewares/auth";
const addressesRoutes = Router();

addressesRoutes.use(authMiddleware);
addressesRoutes.post("/create/:profissional_id", AddressesController.create);

export default addressesRoutes;
