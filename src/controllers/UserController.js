
import User from "../models/User";

class UserController{
  async create(req,res){
    const { name, email, admin, password } = req.body

    const user = await User.create({name, email, admin, password});

    return res.json({user});
  }
}

export { UserController };
