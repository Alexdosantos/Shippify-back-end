import { PrismaClient } from "@prisma/client";
import { CompanyRepository } from "./company.repository";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";


class CompanyModule {
    static instance() {
        const prisma = new PrismaClient();
        const companyRepo = new CompanyRepository(prisma);
        const companyService = new CompanyService(companyRepo);
        const companyController = new CompanyController(companyService);
        return { companyController };
    }
}

export default CompanyModule;