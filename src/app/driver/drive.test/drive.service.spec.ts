import { describe, expect, vi, it } from "vitest";
import { DriverService } from "../driver.service";
import { DriverRepository } from "../driver.repository";
import { PrismaClient } from "@prisma/client";

describe("DriverService - findDriveById", () => {
  it("should return driver details when a valid ID is provided", async () => {
    const driverService = new DriverService(new DriverRepository(new PrismaClient()));
    driverService.findDriveById(1);
  });

  it("should return 404 when driver is not found", async () => {
    const driverService = new DriverService(new DriverRepository(new PrismaClient()));
    driverService.findDriveById(1);
  });
});
