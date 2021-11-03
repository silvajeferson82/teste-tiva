import AddressesServices from "../services/AddressesServices";

class AddressesControler {
  async create(req, res) {
    const { profissional_id } = req.params;
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
        profissional_id,
      });

      return res.json(address);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error.message });
    }
  }
}

export default new AddressesControler();
