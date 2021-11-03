import Schedules from "../entities/Schedules";
class SchedulesService {
  async execute({
    data_inicio,
    data_fim,
    hora_inicio,
    hora_fim,
    professional_id,
  }) {
    const appointment = await Schedules.create({
      data_inicio,
      data_fim,
      hora_inicio,
      hora_fim,
      professional_id,
    });

    return appointment;
  }
}

export default new SchedulesService();
