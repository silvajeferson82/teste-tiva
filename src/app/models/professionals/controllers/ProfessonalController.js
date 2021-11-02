import ProfessionalServices from "../services/ProfessionalServices";
class ProfessionalControllers {
  async create(req, res) {
    const img = req.file;
    let foto;
    if (img) {
      foto = img.filename;
    }
    foto = "NULL";
    const { name, description, email, contato } = req.body;
    try {
      const professional = await ProfessionalServices.execute({
        name,
        description,
        email,
        contato,
        foto,
      });

      return res.json(professional);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }

    // if (!foto) {
    //   console.log(foto);
    //   return res.json({
    //     error: true,
    //     message: "Sucess...",
    //   });
    // }

    // return res.json({
    //   error: false,
    //   message: "Fail...",
    // });
  }
}

export default new ProfessionalControllers();
