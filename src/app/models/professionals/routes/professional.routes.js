import { Router } from "express";
import multer from "multer";
import multerConfig from "../../../../config/multer";
import ProfessonalController from "../controllers/ProfessonalController";

const upload = multer(multerConfig);
const professionalRoutes = Router();

professionalRoutes.post(
  "/create",
  upload.single("foto"),
  ProfessonalController.create,
);

export default professionalRoutes;
