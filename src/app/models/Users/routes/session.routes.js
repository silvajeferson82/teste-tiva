import { Router } from "express";
import AuthenticateUserController from "../controllers/AuthenticateUserController";

const sessionRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Session
 *  description: Create token for user
 * # schemes:
 * # - http
 * paths:
 *  /login:
 *    post:
 *      tags:
 *      - Session
 *      description: create session
 *      parameters:
 *        - name: body
 *          in: body
 *          description: seu email e senha
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: e@gmail.com
 *              password:
 *                type: string
 *                example: '12345'
 *      responses:
 *        '200':
 *          description: A successful response
 */
sessionRouter.post("/", AuthenticateUserController.handle);

export default sessionRouter;
