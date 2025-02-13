import { PrismaClient } from "@prisma/client";
import { DriverRepository } from "./driver.repository";
import { DriverService } from "./driver.service";
import { DriverController } from "./driver.controller";

class DriverModule {
  static instance() {
    const prisma = new PrismaClient();
    const driveRepo = new DriverRepository(prisma);
    const driveService = new DriverService(driveRepo);
    const driveController = new DriverController(driveService);
    return { driveController };
  }
}

export default DriverModule;
