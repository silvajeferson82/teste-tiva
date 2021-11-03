import Addresses from "../entities/Addresses";
import Professionals from "../../professionals/entities/Professionals";

class AddressesServices {
  async execute({ cep, estado, cidade, bairro, rua, numero, professional_id }) {
    const alreadExists = await Professionals.findByPk(professional_id);

    if (!alreadExists) {
      throw new Error("Profissional não encontrado.");
    }

    const address = await Addresses.create({
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      professional_id,
    }).catch(() => {
      throw new Error("Não foi possivel criar Registro.");
    });

    return address;
  }

  async list({ professional_id }) {
    const addresses = await Addresses.findAll({ where: { professional_id } });

    if (!addresses) {
      throw new Error("Sem registro de endereços");
    }

    return addresses;
  }
}

export default new AddressesServices();
