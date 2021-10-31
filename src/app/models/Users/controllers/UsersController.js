import Users from "../entities/Users";

class UsersController {
  async index(_, res) {
    try {
      const users = await Users.findAll();

      return res.json(users);
    } catch (err) {
      console.log("ERRo 2", err);
      return res.status(500).json({ Error: err.message });
    }
  }

  async store(req, res) {
    const { name, email, admin, password } = req.body;
    console.log("CONTROLLER", req.body);
    try {
      const newUser = await Users.create({ name, email, admin, password, });

      return res.json({ newUser });
    } catch (err) {
      console.log("ERRo 2", err);
      return res.status(500).json({ Error: err.message });
    }
  }
}

export default new UsersController();
