import { Router } from "express";
import DriveModule from "../../app/driver/driver.module";

const router = Router();
const { driveController } = DriveModule.instance();

// Definindo as rotas
router.post("/create", driveController.createDrive.bind(driveController));
router.get("/", driveController.findAll.bind(driveController));
router.get("/driver/:driverId", driveController.findDriveById.bind(driveController));


export default router;
