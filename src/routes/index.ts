import { Router } from "express";
import vehicleRouter from "./vehicle.router/vehicle.router";
import driverRouter from "./driver.router/driver.router";
import companyRouter from "./company.router/company.router";

const router = Router();

router.use("/vehicles", vehicleRouter);
router.use("/drivers", driverRouter);
router.use("/companies", companyRouter);

export default router;
