import listService from "../Services/ListService.js";
import _store from "../store.js";


function _drawLists() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  removeList(id) {
    if (confirm("Delete this list?")) {
      listService.removeList(id)
      _drawLists();
    }
  }

  removeItem(itemId, index) {
    if (confirm("Delete this item?")) {
      listService.removeItem(itemId, index)
      _drawLists();
    }

  }

  addItem(event, listId) {
    event.preventDefault();
    let item = event.target.item.value
    listService.addItem(item, listId)
    _drawLists();
  }

  addList(event) {
    event.preventDefault();
    let rawList = {
      title: event.target.title.value,
      listColor: event.target.listColor.value
    }
    listService.addList(rawList)
    _drawLists();
  }


}
