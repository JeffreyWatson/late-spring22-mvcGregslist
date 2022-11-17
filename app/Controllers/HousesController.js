import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";



function _drawHouses() {
  let house = ProxyState.houses
  let template = ''
  house.forEach(h => {
    template += h.Template
  })
  // @ts-ignore
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
    this.viewHouses()
  }

  viewHouses() {
    let form = getHouseForm()
    // @ts-ignore
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  async getHouses() {
    await housesService.getHouses()
  }

  async createHouse() {
    window.event?.preventDefault()
    let form = window.event?.target
    let housesData = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    await housesService.createHouse(housesData)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }


  openEditForm(id) {
    // @ts-ignore
    let house = ProxyState.houses.find(h => h.id == id)
    let updateForm = getHouseForm(house)
    // @ts-ignore
    document.getElementById('form-body').innerHTML = updateForm
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  async updateHouse(id) {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let houseData = {
      // @ts-ignore
      bedrooms: form.make.value,
      // @ts-ignore
      bathrooms: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
    }
    await housesService.updateHouse(houseData, id)
  }



  deleteHouse(id) {
    housesService.deleteHouse(id)
    console.log(id);
  }
}