export function getHouseForm(house = {}) {
  return /*html*/`
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
              <h3> List a House </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Bedrooms</label>
                    <input required type="number" name="bedrooms" id="bedrooms" placeholder="Enter number of bedrooms..." maxlength="15"
                      minlength="1" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter number of bathrooms">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Bathrooms</label>
                    <input required type="text" name="bathrooms" id="bathrooms" placeholder="Enter number of bathrooms..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" name="year" id="year" value="2000" min="1900" max="3000"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Levels</label>
                    <input required type="number" name="levels" id="levels" value="1" min="1" max="100"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price" value="1" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Tell us about the house..." class="form-control" maxlength="125" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="create a house"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}