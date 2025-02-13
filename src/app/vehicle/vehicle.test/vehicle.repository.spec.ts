import { describe, test, expect, it } from "vitest";
import { VehicleRepository } from "../vehicle.repository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Vehicle Test", () => {
  it("Should be able to create a new vehicle", async () => {
    const data = {
      plate: "XYZ-789",
      model: "Ford Transit",
      type: "van",
      capacity: "750kg",
    };

    const vehicle = new VehicleRepository(prisma);
    const result = await vehicle.create(data);

    expect(result).toMatchObject({
      plate: "XYZ-789",
      model: "Ford Transit",
      type: "van",
      capacity: "750kg",
    });
  });
});
