import { PrismaClient } from "@prisma/client";
import { DriverDto } from "./driver.Dto/driver.Dto";

export class DriverRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: DriverDto) {
    try {
      return this.prisma.driver.create({ data });
    } catch (error) {
      return { error: "Error when creating driver", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.prisma.driver.findMany();
    } catch (error) {
      console.error("Error when searching for drivers:", error);
      return { error: "Error when searching for drivers", status: 500 };
    }
  }

  async findUnique(driver_id: number) {
    try {
      const driver = await this.prisma.driver.findUnique({
        where: { id: driver_id },
        include: {
          company: true,
          vehicles: true,
        },
      });
      if (!driver) {
        return { error: "Driver not found", status: 404 };
      }
      return driver;
    } catch (error) {
      console.error("Error when searching for driver:", error);
      return { error: "Error when searching for driver", status: 500 };
    }
  }

  async findUniqueByEmail(email: string) {
    try {
      const driver = await this.prisma.driver.findMany({ where: { email } });
      if (!driver) {
        return { error: "Driver not found", status: 404 };
      }
      return driver;
    } catch (error) {
      console.error("Error when searching for driver:", error);
      return { error: "Error when searching for driver", status: 500 };
    }
  }
}
