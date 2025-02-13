import { VehicleService } from "./vehicle.service";
import { Request, Response } from "express";

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async create(req: Request, res: Response) {
    try {
      const vehicle = await this.vehicleService.createVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar veículo", status: 500 });
    }
  }

  async getVehicles(req: Request, res: Response) {
    try {
      const vehicles = await this.vehicleService.getVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      res.status(500).json({ error: "Erro ao buscar veículos", status: 500 });
    }
  }
}
