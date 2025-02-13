import { CompanyService } from "./company.service";
import { Request, Response } from "express";

export class CompanyController {
  constructor(private companyService: CompanyService) {}
  async createCompany(req: Request, res: Response) {
    try {
      const company = await this.companyService.createCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when creating company", status: 500 });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const companies = await this.companyService.findAll();
      res.status(200).json(companies);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when searching for companies", status: 500 });
    }
  }
}
