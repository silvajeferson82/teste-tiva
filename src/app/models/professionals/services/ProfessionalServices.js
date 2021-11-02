import Professionals from "../entities/Professionals";

class ProfessionalService {
  async execute({ name, description, email, contato, foto }) {
    const alreadExists = await Professionals.findOne({
      where: { email },
    });

    if (alreadExists) {
      throw new Error("Profissional já esta cadastrado.");
    }

    const professional = await Professionals.create({
      name,
      description,
      email,
      contato,
      foto,
    });

    return professional;
  }
}

export default new ProfessionalService();
