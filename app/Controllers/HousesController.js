import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";



function _drawHouses() {
  let house = ProxyState.houses
  let template = ''
  house.forEach(h => {
    template += h.Template
  })
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  //  Get Car Form and inject into modal body
  viewHouses() {
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    console.log('submitted form', form);
    let housesData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      sqFootage: form.sqFootage.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(housesData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteHouse(id) {
    housesService.deleteHouse(id)
    console.log(id);
  }
}