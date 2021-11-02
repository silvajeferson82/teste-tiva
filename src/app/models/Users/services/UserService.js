import { hash } from "bcryptjs";
import Users from "../entities/Users";

class UserService {
  async list() {
    const users = await Users.findAll();
    return users;
  }

  async execute({ name, email, contato, admin, password }) {
    const userAlreadExists = await Users.findOne({
      where: { email },
    });

    if (userAlreadExists) {
      throw new Error("Usuário já existe");
    }

    const passwordHash = await hash(password, 8);
    const user = await Users.create({
      name,
      email,
      contato,
      admin,
      password: passwordHash,
    });

    return user;
  }
}

export default new UserService();
