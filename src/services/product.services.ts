import { generateId, productList } from "../database/database";
import { IProduct, TCreateProductData, TUpdateProductData } from "../interfaces/products.interface";

// Processo lógico principal de cada rota (Regra de negócio)

export const createProduct = (data: TCreateProductData) => {

    const now = new Date();

    const newProduct: IProduct = {
        id: generateId(),
        name: data.name,
        price: data.price,
        createdAt: now,
    };

    productList.push(newProduct);

    
    return newProduct;
};

export const getProducts = () => {
    return productList;
};

export const getOnePoduct = (id: number) => {
    const product = productList.find(product => product.id === id);

    return product;
};

export const removeProduct = (id: number) => {
    const index = productList.findIndex(product => product.id === id);

    if(index === -1){
        throw new Error("Product not found");
    }

    productList.splice(index, 1);
};

export const updateProduct = (id: number, data: TUpdateProductData) => {
    const currentProduct = productList.find(product => product.id === id);

    if (!currentProduct){
        throw new Error("Product not found")
    }

    const now = new Date();

    const updateProduct: IProduct = {
        ...currentProduct, ...data, updatedAt: now
    };

    const index = productList.findIndex(product => product.id === id);

    productList.splice(index, 1, updateProduct);

    return updateProduct;
}

