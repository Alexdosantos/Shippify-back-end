import { PrismaClient } from "@prisma/client";
import { CompanyDto } from "./company.Dto/company.Dto";
import { CompanyRepository } from "./company.repository";

export class CompanyService {
  constructor(private companyRepo: CompanyRepository) {}

  async createCompany(data: CompanyDto) {
    try {
      return this.companyRepo.create(data);
    } catch (error) {
      return { error: "Erro ao criar empresa", status: 500 };
    }
  }
  async findAll() {
    try {
      return this.companyRepo.findAll();
    } catch (error) {
      console.error("Erro ao buscar empresas no banco:", error);
      return { error: "Erro ao buscar empresas", status: 500 };
    }
  }
  
}
