import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";
import Users from "../entities/Users";

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error("Email/Password Incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password Incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "90880e6e12ef332464804bbc9cd31e5a",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export default new AuthenticateUserService();
