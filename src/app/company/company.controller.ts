import { CompanyService } from "./company.service";
import { Request, Response } from "express";

export class CompanyController {
 constructor(
    private companyService: CompanyService
 ){}   
 async createCompany(req: Request, res: Response) {
    try {
       const company = await this.companyService.createCompany(req.body);
       res.status(201).json(company);
    } catch (error) {
       res.status(500).json({ error: "Erro ao criar empresa", status: 500 });
    }
 }

 async findAll(req: Request, res: Response) {
    try {
        const companies = await this.companyService.findAll();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar empresas", status: 500 });
    }
 }
 
}