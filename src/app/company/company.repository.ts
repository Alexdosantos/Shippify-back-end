import { PrismaClient } from "@prisma/client";
import { CompanyDto } from "./company.Dto/company.Dto";

export class CompanyRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CompanyDto) {
    try {
      return this.prisma.company.create({ data });
    } catch (error) {
      console.error("Error when creating company:", error);
      return { error: "Error when creating company", status: 500 };
    }
  }

  async findAll() {
    try {
      return this.prisma.company.findMany();
    } catch (error) {
      console.error("Error when searching for companies:", error);
      return { error: "Error when searching for companies", status: 500 };
    }
  }

  async findUnique(id: number) {
    try {
      const company = await this.prisma.company.findUnique({
        where: { id },
      });
      if (!company) {
        return { error: "Company not found", status: 404 };
      }
      return company;
    } catch (error) {
      console.error("Error when searching for company:", error);
      return { error: "Error when searching for company", status: 500 };
    }
  }
}
