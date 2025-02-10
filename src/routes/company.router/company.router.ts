import { Router } from "express";
import CompanyModule from "../../app/company/company.module";

const router = Router();
const { companyController } = CompanyModule.instance();

router.post("/create", companyController.createCompany.bind(companyController));
router.get("/", companyController.findAll.bind(companyController));

export default router;