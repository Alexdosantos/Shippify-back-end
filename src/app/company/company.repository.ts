import { PrismaClient } from "@prisma/client";
import { CompanyDto } from "./company.Dto/company.Dto";

export class CompanyRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CompanyDto) {
    try {
      return this.prisma.company.create({ data });
    } catch (error) {
      return { error: "Erro ao criar empresa", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.prisma.company.findMany();
    } catch (error) {
      console.error("Erro ao buscar empresas no banco:", error);
      return { error: "Erro ao buscar empresas", status: 500 };
    }
  }

  async findUnique(id: number) {
    try {
      return this.prisma.company.findUnique({ where: { id } });
    } catch (error) {
      console.error("Erro ao buscar empresa:", error);
      return { error: "Erro ao buscar empresa", status: 500 };
    }
  }

  

  
}
