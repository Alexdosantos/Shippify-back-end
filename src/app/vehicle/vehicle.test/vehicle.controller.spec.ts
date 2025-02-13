import { it, expect, beforeEach, describe, vi } from "vitest";
import { VehicleController } from "../vehicle.controller";
import { VehicleService } from "../vehicle.service";
import { Request, Response } from "express";
import { VehicleRepository } from "../vehicle.repository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const vehicleRepo = new VehicleRepository(prisma);
const vehicleService = new VehicleService(vehicleRepo);
const vehicleController = new VehicleController(vehicleService);

describe("VehicleController", () => {
  beforeEach(() => {
    
  });

  it("should create a new vehicle", async () => {
    // Mock request object
    const req = {
      body: {
        plate: "WAL-016",
        model: "FIAT",
        type: "passeio",
        capacity: "200kg",
      },
    } as Request;

    // Mock response object
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    // Mock the VehicleService create method
    const mockVehicle = { id: 1, ...req.body };
    vi.spyOn(vehicleService, "createVehicle").mockResolvedValue(mockVehicle);

    // Call the create method
    await vehicleController.create(req, res);

    // Assertions
    expect(vehicleService.createVehicle).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockVehicle);
  });
});
