import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { apiCar } from "./AxiosService.js";


class CarsService {
  async getCars() {
    // @ts-ignore
    const response = await apiCar.get('cars')
    ProxyState.cars = response.data.map(c => new Car(c))
  }


  async createCar(carData) {
    const response = await apiCar.post('cars', carData)
    ProxyState.cars = [...ProxyState.cars, new Car(response.data)]
  }


  async updateCar(carData, id) {
    const response = await apiCar.put('cars/' + id, carData)
    console.log('update car', response.data);
    let carIndex = ProxyState.cars.findIndex(c => c.id == id)
    ProxyState.cars.splice(carIndex, 1, new Car(response.data))
    ProxyState.cars = ProxyState.cars
  }


  deleteCar(id) {
    apiCar.delete('cars/' + id)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
  }
}


export const carsService = new CarsService()