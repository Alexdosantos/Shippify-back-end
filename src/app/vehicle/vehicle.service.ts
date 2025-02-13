import { DriverRepository } from "../driver/driver.repository";
import { VehicleDto } from "./vehicle.Dto/vehicle.Dto";
import { VehicleRepository } from "./vehicle.repository";

export class VehicleService {
  constructor(private vehicleRepo: VehicleRepository) {}

  async createVehicle(data: VehicleDto) {
    try {
      return await this.vehicleRepo.create(data);
    } catch (error) {
      return { error: "Erro ao criar veículo", status: 500 };
    }
  }

  async getVehicles() {
    try {
      return this.vehicleRepo.findAll();
    } catch (error) {
      return { error: "Erro ao buscar veículos", status: 500 };
    }
  }
}
