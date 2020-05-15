import List from "../Models/List.js";
import _store from "../store.js";

//Public
class ListService {


  removeList(id) {
    _store.State.lists = _store.State.lists.filter(l => l.id !== id)
    _store.saveState();

  }

  addList(rawList) {
    let list = new List(rawList)
    _store.State.lists.push(list)
    _store.saveState();
  }

  addItem(item, itemId) {
    let list = _store.State.lists.find(l => l.id == itemId)
    list.items.push(item)
    _store.saveState();
  }

  removeItem(itemId, index) {
    let item = _store.State.lists.find(l => l.id == itemId)
    item.items.splice(index, 1)
    _store.saveState();
  }



}

const SERVICE = new ListService();
export default SERVICE;
