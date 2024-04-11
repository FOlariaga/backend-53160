class ProductManager {

    constructor() {
        this.products = []
        this.ids = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (title && description && price && thumbnail && code && stock) {
            if (this.products.some((p) => p.code === code)) {
                console.log("el codigo ya se encuentra en otro producto")
            } else {
                const product = {
                    id: this.ids++,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                }
                this.products.push(product)
            }
        } else {
            console.log("faltan datos para agregar el producto")
        }
    }

    getProduct() {
        console.log(this.products)
        return this.products
    }

    getProductById(idProduct) {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i]
            if (product.id === idProduct) {
                console.log(this.products[i])
                return this.products
            }
        }
        console.log("Not found")

    }
}


const productManager = new ProductManager();

//ejemplo de carga de productos
productManager.addProduct("producto 1", "este es el primer producto", 200, "./ejemploDeImagen.png", "c726", 7);
productManager.addProduct("producto 2", "este es el segundo producto", 500, "./ejemploDeImagen.png", "c848", 3);


//este producto le falta informacion
productManager.addProduct("producto 3", "este es el tercer producto", 700, "./ejemploDeImagen.png", "c938");

//este producto tiene el codigo repetido
productManager.addProduct("producto 4", "este es el cuarto producto", 400, "./ejemploDeImagen.png", "c848", 14);


//trae todos los productos del array
productManager.getProduct()

// trae el producto con el id que se le indique entre los parentesis
productManager.getProductById(1)




























// addProduct(title, description, price, thumbnail, code, stock) {
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.thumbnail = thumbnail;
//     this.code = code;
//     this.stock = stock;