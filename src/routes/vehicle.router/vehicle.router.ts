import { Router } from "express";
import VehicleModule from "../../app/vehicle/vehicle.module";

const router = Router();
const { vehicleController } = VehicleModule.instance();

// Definindo as rotas
router.post("/create", vehicleController.create.bind(vehicleController));
router.get("/", vehicleController.getVehicles.bind(vehicleController));
router.get("/driver/:driverId", vehicleController.getVehiclesByDriver.bind(vehicleController));

export default router;
