import { PrismaClient } from "@prisma/client";
import { VehicleDto } from "./vehicle.Dto/vehicle.Dto";
import { DriverRepository } from "../driver/driver.repository";

export class VehicleRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: VehicleDto) {
    try {
      return this.prisma.vehicle.create({ data });
    } catch (error) {
      return { error: "Erro ao criar veículo", status: 500 };
    }
  }

  async findAll() {
    try {
      return await this.prisma.vehicle.findMany();
    } catch (error) {
      console.error("Erro ao buscar veículos no banco:", error);
      return { error: "Erro ao buscar veículos", status: 500 };
    }
  }

  async finByDriverAndCompany(driver_id: number) {
    try {
      return this.prisma.vehicle.findMany({ where: { driver_id } });
    } catch (error) {
      return { error: "Erro ao buscar veículos", status: 500 };
    }
  }

  async findUnique(vehicle_id: number) {
    try {
      return this.prisma.vehicle.findUnique({ where: { id: vehicle_id } , include: { driver: true} });
    } catch (error) {
      return { error: "Erro ao buscar veículo", status: 500 };
    }
  }

  
}
