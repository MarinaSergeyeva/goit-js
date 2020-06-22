const cart = {
  totalCount: 0,
  summary: 0,
  products: [],

  getTotalCount() {
    let totalProducts = 0;
    for (const product of this.products) {
      totalProducts += product.price * product.count;
    }
    this.totalCount = totalProducts;
  },

  getSummary() {
    let summaryProducts = 0;
    for (const product of this.products) {
      summaryProducts += product.price * product.count;
    }
    this.summary = summaryProducts;
  },

  addProductCount(id) {
    for (const product of this.products) {
      if (product.id === id) {
        product.count += 1;
      }
    }
    this.getSummary();
    this.getTotalCount();
  },

  removeProductCount(id) {
    for (const product of this.products) {
      if (product.id === id) {
        if (product.count >= 1) {
          product.count -= 1;
        } else {
          this.removeProduct(id);
        }
      }
    }
    this.getSummary;
    this.getTotalCount();
  },

  addProduct(product, count) {
    this.products.push(product);
    this.totalCount += count;
    this.summary += product.price * count;
  },

  removeProduct(id) {
    let filteredProducts = [];

    for (const product of this.products) {
      if (product.id !== id) {
        filteredProducts.push(product);
      }
    }

    // for (const product of this.products) {
    //   if (product.id === id) {
    //     this.products = [
    //       ...this.products.splice(this.products.indexOf(product), 1),
    //     ];
    //   }
    // }

    this.products = [...filteredProducts];
    this.getSummary;
    this.getTotalCount();
  },
};

const product = {
  price: 0,
  name: "",
  id: Date.now(),
  count: 1,
};
