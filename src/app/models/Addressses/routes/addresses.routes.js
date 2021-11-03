import { Router } from "express";
import AddressesController from "../controllers/AddressesController";

const addressesRoutes = Router();

addressesRoutes.post("/create/:profissional_id", AddressesController.create);

export default addressesRoutes;
