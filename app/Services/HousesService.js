import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService {
  createHouse(housesData) {
    // console.log(housesData);
    ProxyState.houses = [...ProxyState.houses, new House(housesData)]
    console.log(ProxyState.houses);
  }
}

export const housesService = new HousesService()