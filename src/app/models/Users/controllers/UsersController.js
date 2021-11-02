import UserService from "../services/UserService";

class UsersController {
  async index(_, res) {
    try {
      const users = await UserService.list();

      return res.json(users);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }

  async store(req, res) {
    const { name, email, contato, admin, password } = req.body;

    try {
      const user = await UserService.execute({
        name,
        email,
        contato,
        admin,
        password,
      });

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }
}

export default new UsersController();
