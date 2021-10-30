import { hash } from 'bcryptjs';
import User from '../models/User';

class CreateUserService {
  async execute ({ name, email, admin, password }) {
    console.log(name, email, admin, password);
    if(!email){
      throw new Error("Email Incorrect");
    }

    const userAlreadExists = await User.findOne({ where: { email }});

    if(userAlreadExists){
      throw new Error("Usuário já existe");
    }

    const passwordhash = await hash(password, 8);

    const user = await User.create({ name, email, admin, password: passwordhash});

    return user;
  }

};

export default new CreateUserService();
