import { generateId } from "../Utils/generateId.js"


export class House {
  constructor(housesData) {
    this.id = housesData.id || generateId()
    this.bedrooms = housesData.bedrooms
    this.bathrooms = housesData.bathrooms
    this.year = housesData.year
    this.levels = housesData.levels
    this.price = housesData.price
    this.description = housesData.description
    this.imgUrl = housesData.imgUrl
  }


  get Template() {
    return /*html*/ `
<div class=" col-6 col-md-3">
    <div class="rounded shadow p-2">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.bedrooms} | ${this.bathrooms}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <div class="d-flex justify-content-between">Year: ${this.year} <span>Levels:${this.levels}</span></div>
      <p>${this.description}</p>
      <div class="d-flex justify-content-between">
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn btn-warning" onclick="app.housesController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </div>
      `
  }

}