import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";


class CarsService {
  async getCars() {
    const response = await axios.get('https://bcw-sandbox.herokuapp.com/api/cars')
    console.log('get cars', response.data);
    ProxyState.cars = response.data.map(c => new Car(c))
  }

  async createCar(carData) {
    const response = await axios.post('https://bcw-sandbox.herokuapp.com/api/cars', carData)
    console.log('create car', response.data);
    ProxyState.cars = [...ProxyState.cars, new Car(response.data)]
  }

  async updateCar(carData, id) {
    const response = await axios.put('https://bcw-sandbox.herokuapp.com/api/cars' + id, carData)
    console.log('update car', response.data);
    // NOTE study up on findIndex and the idea behind exactly what it does.
    let carIndex = ProxyState.cars.findIndex(c => c.id == id)
    // NOTE also with the splice. I dont understand it completely.
    ProxyState.cars.splice(carIndex, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars
  }


  // console.log('arrived in service', id);
  // NOTE find is cool but not necessary here
  // let car = ProxyState.cars.find(c => c.id == id)
  // console.log('car found',car);
  // NOTE filter creates a copy of the cars array but only includes cars that don't have the id selected
  // effectively removing the one we selected from the array AND triggering our listener with =
  deleteCar(id) {
    const response = await axios.delete('https://bcw-sandbox.herokuapp.com/api/cars' + id)
    console.log('deleting', response.data);
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    // ProxyState.cars = ProxyState.cars
    // NOTE above line not necessarily needed
  }

}

export const carsService = new CarsService()