

export class House {
  constructor(housesData) {
    this.bedrooms = housesData.bedrooms
    this.bathrooms = housesData.bathrooms
    this.sqFootage = housesData.sqFootage
    this.price = housesData.price
    this.description = housesData.description
    this.imgUrl = housesData.imgUrl
  }


  get Template() {
    return `
      <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.bedrooms} | ${this.bathrooms}</h5>
      <h4 class="text-center">${this.sqFootage}sqft.</h4>
      <h5 class="text-center">$${this.price}</h5>
      <p class="text-center">${this.description}</p>
      </div>
      </div>
      `
  }

}
  // <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>