import { PrismaClient } from "@prisma/client";
import { VehicleRepository } from "./vehicle.repository";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { DriverRepository } from "../driver/driver.repository";

// Instanciando as dependências
class VehicleModule { 
  static instance() {
    const prisma = new PrismaClient();
    const vehicleRepo = new VehicleRepository(prisma);
    const driverRepo = new DriverRepository(prisma);
    const vehicleService = new VehicleService(vehicleRepo, driverRepo);
    const vehicleController = new VehicleController(vehicleService);
    return { vehicleController };
  }
}

export default VehicleModule;
