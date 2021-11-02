import { Router } from "express";
// eslint-disable-next-line import/extensions
import UsersControllers from "../controllers/UsersController";

const usersRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Routes about users and services
 * # schemes:
 * # - http
 * paths:
 *  /users/list:
 *    get:
 *      tags:
 *      - Users
 *      description: List all users
 *      responses:
 *        '200':
 *          description: A successful response
 */
usersRouter.get("/list", UsersControllers.index);
/**
 * @swagger
 *  /users/create:
 *    post:
 *      tags:
 *      - Users
 *      description: create user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: seu email e senha
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string,
 *                example: Jhon Doe
 *              email:
 *                type: string
 *                example: e@gmail.com
 *              contato:
 *                type: string
 *                example: 91999999999
 *              admin:
 *                type: boolean,
 *                example: true
 *              password:
 *                type: string
 *                example: '12345'
 *      responses:
 *        '200':
 *          description: A successful response
 */
usersRouter.post("/create", UsersControllers.store);

export default usersRouter;
