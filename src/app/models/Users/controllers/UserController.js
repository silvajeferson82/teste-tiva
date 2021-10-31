import UserModel from "../entities/User";

class UserController {
  async store(req,res){
    const { name, email, admin, password } = req.body
    console.log('CONTROLLER',req.body);
    try{
      const newUser = await UserModel.create({ name, email, admin, password, });

      return res.json({newUser});
    }catch(err){
      console.log('ERRo 2',err)
        return res.status(500).json({Error: err.message})
    }
  }
};

export default new UserController();
