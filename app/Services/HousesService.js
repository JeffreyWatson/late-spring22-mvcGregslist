import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { apiHouse } from "./AxiosService";


class HousesService {
  getHouses() {
    const res = apiHouse.get('houses')
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async createHouse() {
    const res = await apiHouse.post('houses')
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  async updateHouse(houseData, id) {
    const res = await apiHouse.put('houses/' + id, houseData)
    console.log('update house', res.data);
    let houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

  deleteHouse(id) {
    apiHouse.delete('houses/' + id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
}

export const housesService = new HousesService()