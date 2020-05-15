import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title
    this.items = data.items || []
    this.listColor = data.listColor
  }


  get Template() {
    return /*html*/`
    <div class="col-md-3 d-flex justify-content-center">
      <div class="card shadow-lg mb-3" style="width: 90%;">
        <div  style="background-color:${this.listColor}" class="card-header text-center text-white )">
          <h2> ${this.title} <button class="btn btn-light text-secondary ml-1"
              onclick="app.listController.removeList('${this.id}')"><i class="fas fa-trash"></i></button> </h2>
        </div>
        <div class="card-body" id="items">
          <ul>
            ${this.itemsTemplate}
          </ul>
          <form onsubmit="app.listController.addItem(event,'${this.id}')">
            <div class="form-group d-flex">
              <input type="text" class="form-control" name="item" id="item" aria-describedby="helpId"
                placeholder="Add Item..." required>
              <button type="submit" class="btn btn-success ml-1 justify-content-end"><i class="fas fa-plus-circle"></i></button>
          </form>
        </div>
      </div>
    </div>
    </div>
  `
  }

  get itemsTemplate() {
    let template = ""
    this.items.forEach((item, index) => {
      template +=/*html*/`
        <li class="my-2"><h4>${item}
          <button class="btn text-warning ml-1" onclick="app.listController.removeItem('${this.id}', ${index})" ><i class="fas fa-ban"></i></button></h4>
        </li>`
    })
    return template;
  }


}

