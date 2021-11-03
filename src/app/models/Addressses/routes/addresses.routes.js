import { Router } from "express";
import AddressesController from "../controllers/AddressesController";
import authMiddleware from "../../../../middlewares/auth";

const addressesRoutes = Router();

addressesRoutes.get("/list/:professional_id", AddressesController.index);

addressesRoutes.use(authMiddleware);
addressesRoutes.post("/create/:professional_id", AddressesController.create);

export default addressesRoutes;
