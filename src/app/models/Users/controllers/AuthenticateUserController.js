import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req, res) {
    const { email, password } = req.body;

    try {
      const token = await AuthenticateUserService.execute({
        email,
        password,
      });

      return res.json(token);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

export default new AuthenticateUserController();
