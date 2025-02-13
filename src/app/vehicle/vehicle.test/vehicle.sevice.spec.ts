import { describe,  expect, it } from "vitest";
import { VehicleService } from "../vehicle.service";
import { VehicleRepository } from "../vehicle.repository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const vehicleRepo = new VehicleRepository(prisma);
const vehicleService = new VehicleService(vehicleRepo);

describe("VehicleService", () => {
  it("should create a new vehicle", async () => {
    const result = await vehicleService.createVehicle({
      plate: "XYZ-789",
      model: "Ford Transit",
      type: "van",
      capacity: "750kg",
    });
    expect(result).toHaveProperty("id");
  });

  it("sholud error if vehicle plate is already registered", async () => {
    try {
      await vehicleService.createVehicle({
        plate: "XYZ-789",
        model: "Ford Transit",
        type: "van",
        capacity: "750kg",
      });
    } catch (error) {
      expect(error).toEqual({ error: "Erro ao criar veículo", status: 500 });
    }
  });
});
