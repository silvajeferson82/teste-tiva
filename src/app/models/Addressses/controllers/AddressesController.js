import AddressesServices from "../services/AddressesServices";

class AddressesControler {
  async create(req, res) {
    const { professional_id } = req.params;
    const { cep, estado, cidade, bairro, rua, numero } = req.body;
    console.log(req.body, req.params);
    try {
      const address = await AddressesServices.execute({
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        professional_id,
      });

      return res.json(address);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error.message });
    }
  }

  async index(req, res) {
    const { professional_id } = req.params;

    try {
      const addresses = await AddressesServices.list({ professional_id });

      return res.json(addresses);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

export default new AddressesControler();
