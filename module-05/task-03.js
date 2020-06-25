class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
    console.log(this.items);
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(newItem) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].includes(newItem)) {
        this.items.splice(this.items.indexOf(this.items[i]), 1);
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
