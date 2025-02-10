import { PrismaClient } from "@prisma/client";
import { DriverDto } from "./driver.Dto/driver.Dto";

export class DriverRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: DriverDto) {
    try {
      return this.prisma.driver.create({ data });
    } catch (error) {
      return { error: "Erro ao criar motorista", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.prisma.driver.findMany();
    } catch (error) {
      console.error("Erro ao buscar motoristas:", error);
      return { error: "Erro ao buscar motoristas", status: 500 };
    }
  }

  async findUnique(driver_id: number) {
    try {
      return this.prisma.driver.findUnique({
        where: { id: driver_id },
        include: {
          vehicles: true,
        },
        
      });
    } catch (error) {
      console.error("Erro ao buscar motorista:", error);
      return { error: "Erro ao buscar motorista", status: 500 };
    }
  }

  async findUniqueByEmail(email: string) {
    try {
      return this.prisma.driver.findMany({ where: { email } });
    } catch (error) {
      console.error("Erro ao buscar motorista:", error);
      return { error: "Erro ao buscar motorista", status: 500 };
    }
  }
}
