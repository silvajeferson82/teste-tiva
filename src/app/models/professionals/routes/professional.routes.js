import { Router } from "express";
import multer from "multer";
import multerConfig from "../../../../config/multer";
import ProfessonalController from "../controllers/ProfessonalController";

import authMiddleware from "../../../../middlewares/auth";

const upload = multer(multerConfig);
const professionalRoutes = Router();

professionalRoutes.use(authMiddleware);
professionalRoutes.post(
  "/create",
  upload.single("foto"),
  ProfessonalController.create,
);

export default professionalRoutes;
