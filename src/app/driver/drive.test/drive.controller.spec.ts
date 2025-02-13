import { describe, expect, vi, it } from "vitest";
import { DriverController } from "../driver.controller";
import { DriverService } from "../driver.service";
import { Request, Response } from "express";

describe("DriverController - findDriveById", () => {
  it("should return driver details when a valid ID is provided", async () => {
    const mockDriverService = {
      findDriveById: vi.fn().mockResolvedValue({ id: 1, name: "John Doe" }),
    } as unknown as DriverService;

    const controller = new DriverController(mockDriverService);

    const req = { params: { driverId: "1" } } as unknown as Request;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    await controller.findDriveById(req, res);

    // Verifica se o service foi chamado com 1
    expect(mockDriverService.findDriveById).toHaveBeenCalledWith(1);

    // Verifica se o status foi 200
    expect(res.status).toHaveBeenCalledWith(200);

    // Verifica se o JSON retornado está correto
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: "John Doe" });
  });

  it("should return 500 when an error occurs", async () => {
    const mockDriverService = {
      findDriveById: vi.fn().mockRejectedValue(new Error("Database error")),
    } as unknown as DriverService;

    const controller = new DriverController(mockDriverService);

    const req = { params: { driverId: "1" } } as unknown as Request;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    await controller.findDriveById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Error when searching for motorista",
      status: 500,
    });
  });
});
