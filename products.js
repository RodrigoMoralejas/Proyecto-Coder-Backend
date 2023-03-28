class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProducts = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    !product.title && console.log("Title missing");
    !product.description && console.log("Description missing");
    !product.price && console.log("Price missing");
    !product.thumbnail && console.log("Thumbnail missing");
    !product.code && console.log("Code missing");
    !product.stock && console.log("Stock missing");

    const validationCode = this.products.find(
      (product) => product.code === code
    );

    if (validationCode) {
      console.log("code in use");
      return;
    } else {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
    }
  };

  getProductById = (id) => {
    const productId = this.products.find((product) => product.id === id);

    if (!productId) {
      console.log("product not found");
      return;
    } else {
      return productId;
    }
  };
}
