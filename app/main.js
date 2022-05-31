import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";

class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()
  housesController = new HousesController()
}

window["app"] = new App();
