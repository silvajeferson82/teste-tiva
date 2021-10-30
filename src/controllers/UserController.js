import createUserService from '../service/CreateUserService';

class UserController{
  async store(req,res){
    const { name, email, admin, password } = req.body
    console.log('CONTROLLER',req.body);
    try{
      const newUser = await createUserService.execute({
        name,
        email,
        admin,
        password
      });

      return res.status(200).json({newUser});
    }catch(err){
      console.log(err.message);
      return res.json({ Error: err.message});
    }
  }
};

export default new UserController();
