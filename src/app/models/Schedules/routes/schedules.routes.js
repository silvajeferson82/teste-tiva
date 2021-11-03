import { Router } from "express";
import SchedulesController from "../controllers/SchedulesController";

const scheduleRoutes = Router();

scheduleRoutes.post("/create/:professional_id", SchedulesController.create);

export default scheduleRoutes;
