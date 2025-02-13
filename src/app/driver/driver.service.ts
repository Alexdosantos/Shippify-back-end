import { DriverDto } from "./driver.Dto/driver.Dto";
import { DriverRepository } from "./driver.repository";

export class DriverService {
  constructor(private driveRepo: DriverRepository) {}

  async createDrive(data: DriverDto) {
    try {
      const { email } = data;
      const drive = await this.driveRepo.findUniqueByEmail(email);
      if (drive) {
        return { error: "Driver already exists", status: 400 };
      }
      return this.driveRepo.create(data);
    } catch (error) {
      return { error: "Error when creating driver", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.driveRepo.findAll();
    } catch (error) {
      return { error: "Error when searching for drivers", status: 500 };
    }
  }

  async findDriveById(driverId: number) {
    try {
      const drive = await this.driveRepo.findUnique(driverId);
      if (!drive) {
        return { error: "Driver not found", status: 404 };
      }
      return drive;
    } catch (error) {
      return { error: "Error when searching for driver", status: 500 };
    }
  }
}
