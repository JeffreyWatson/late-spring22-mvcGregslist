import { generateId } from "../Utils/generateId.js"


export class Car {
  constructor(carData) {
    // NOTE need id to have something unique on each car
    // NOTE added carData.id to this.id
    this.id = carData.id || generateId()
    this.make = carData.make
    this.model = carData.model
    this.description = carData.description
    this.price = carData.price
    this.year = carData.year
    this.color = carData.color
    this.imgUrl = carData.imgUrl
  }

  // NOTE add an extra button for editing vehicles
  get Template() {
    return /*html*/`
  <div class=" col-6 col-md-3 mt-3 height">
    <div class="rounded shadow p-2">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.make} | ${this.model} | ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <div class="d-flex justify-content-between">
      <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn btn-warning" onclick="app.carsController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </div>
    `
  }
}