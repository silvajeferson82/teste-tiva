
class ProfessionalControllers {
  async create(req, res) {
    const img = req.file;

    if (img) {
      return res.json({
        erro: false,
        message: "Upload realizado com suceso!",
      });
    }

    return res.json({
      erro: true,
      message: "Erro: Upload não realizado!",
    });
  }
}

export default new ProfessionalControllers();
