import { DriverRepository } from "../driver/driver.repository";
import { VehicleDto } from "./vehicle.Dto/vehicle.Dto";
import { VehicleRepository } from "./vehicle.repository";

export class VehicleService {
  constructor(
    private vehicleRepo: VehicleRepository,
    private driverRepo: DriverRepository,
  ) {}

  async createVehicle(data: VehicleDto) {
    try {
      return this.vehicleRepo.create(data);
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

  async getVehiclesByDriver(driverId: number) {
    try {
      if (!driverId) {
        return { error: "Id do motorista não fornecido", status: 400 };
      }
      return await this.driverRepo.findUnique(driverId);
    } catch (error) {
      return { error: "Erro ao buscar veículos por motorista", status: 500 };
    }
  }
}
