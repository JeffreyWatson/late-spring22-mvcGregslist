import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";

function _drawCars() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(c => {
    template += c.Template
    // console.log(template);
  })
  // @ts-ignore
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    this.getCars()
    this.viewCars()
  }

  // NOTE view cars handles drawing the cars and injecting the new car form
  viewCars() {
    let form = getCarForm()
    // @ts-ignore
    document.getElementById('form-body').innerHTML = form
    _drawCars()
  }

  // NOTE added async getCars for getting the cars from the api.
  async getCars() {
    await carsService.getCars()
  }


  // NOTE prevent default keeps the form submit event from reloading the page
  // NOTE controller will collect all the information from the form...
  // NOTE the red underlines between form and value are ok
  // console.log('form submitted', form);
  // console.log('the new car', carData);
  // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
  // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
  // NOTE added async to createCar()
  async createCar() {
    window.event?.preventDefault()
    let form = window.event?.target
    let carData = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      color: form.color.value
    }
    await carsService.createCar(carData)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateCar(id) {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let carData = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      color: form.color.value
    }
    await carsService.updateCar(carData, id)
  }

  openCreateForm() {
    let form = getCarForm()
    // @ts-ignore
    document.getElementById('form-body').innerHTML = form
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  openEditForm() {
    // @ts-ignore
    let car = ProxyState.cars.find(c => c.id == id)
    let updateForm = getCarForm(car)
    // @ts-ignore
    document.getElementById('form-body').innerHTML = updateForm
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  deleteCar(id) {
    carsService.deleteCar(id)
  }
}