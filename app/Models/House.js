import { generateId } from "../Utils/generateId.js"


export class House {
  constructor(housesData) {
    this.id = housesData.id || generateId()
    this.bedrooms = housesData.bedrooms
    this.bathrooms = housesData.bathrooms
    this.sqFootage = housesData.sqFootage
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
      <h4 class="text-center">${this.sqFootage}</h4>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
      `
  }

}