import { DriverService } from "./driver.service";
import { Request, Response } from "express";

export class DriverController {
  constructor(private driveService: DriverService) {}

  async createDrive(req: Request, res: Response) {
    try {
      const drive = await this.driveService.createDrive(req.body);
      res.status(201).json(drive);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar motorista", status: 500 });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const drives = await this.driveService.findAll();
      res.status(200).json(drives);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar motoristas", status: 500 });
    }
  }

  async findDriveById(req: Request, res: Response) {
    try {
      const { driverId } = req.params;
      const drive = await this.driveService.findDriveById(+driverId);
      res.status(200).json(drive);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar motorista", status: 500 });
    }
  }

  
}
