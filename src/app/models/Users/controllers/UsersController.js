import Users from "../entities/Users";
import { hash } from "bcryptjs";

class UsersController {
  async index(_, res) {
    try {
      const users = await Users.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }

  async store(req, res) {
    const { name, email, admin, password } = req.body;

    try {
      const passwordHash = await hash(password, 8);
      const user = await Users.create({
        name,
        email,
        admin,
        password: passwordHash,
      });

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }
}

export default new UsersController();
