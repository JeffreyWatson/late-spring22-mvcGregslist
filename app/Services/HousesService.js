import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService {
  createHouse(housesData) {
    ProxyState.houses = [...ProxyState.houses, new House(housesData)]
    console.log(ProxyState.houses);
  }

  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
}

export const housesService = new HousesService()