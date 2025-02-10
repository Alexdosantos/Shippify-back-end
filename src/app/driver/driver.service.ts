import { DriverDto } from "./driver.Dto/driver.Dto";
import { DriverRepository } from "./driver.repository";

export class DriverService {
  constructor(private driveRepo: DriverRepository) {}

  async createDrive(data: DriverDto) {
    try {
      return this.driveRepo.create(data);
    } catch (error) {
      return { error: "Erro ao criar motorista", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.driveRepo.findAll();
    } catch (error) {
      return { error: "Erro ao buscar motoristas", status: 500 };
    }
  }

  async findDriveById(driverId: number) {
    try {
      const drive = await this.driveRepo.findUnique(driverId);
      if (!drive) {
        return { error: "Motorista não encontrado", status: 404 };
      }
      return drive;
    } catch (error) {
      return { error: "Erro ao buscar motorista", status: 500 };
    }
  }
}
