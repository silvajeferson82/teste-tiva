import { startOfHour, parseISO, isBefore } from 'date-fns';
import SchedulesService from "../services/SchedulesService";

class SchedulesController {
  async create(req, res) {
    const { professional_id } = req.params;
    const { data_inicio, data_fim, hora_inicio, hora_fim } = req.body;

    try {
      const appointment = await SchedulesService.execute({
        data_inicio,
        data_fim,
        hora_inicio,
        hora_fim,
        professional_id,
      });

      return res.json(appointment);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

export default new SchedulesController();
