import { Request, Response, request } from "express";
import { createProduct, getOnePoduct, getProducts, removeProduct, updateProduct } from "../services/product.services";

 const create = (request: Request, response: Response) => {
    const product = createProduct(request.body);
    
    return response.status(201).json(product);
};

 const get = (request: Request, response: Response) => {

    const productList = getProducts();

    return response.status(200).json(productList);
};

 const getOne = (request: Request, response: Response) => {
    const product = getOnePoduct(Number(request.params.id));

    return response.status(200).json(product);
};

 const remove = (request: Request, response: Response) => {
    removeProduct(Number(request.params.id))

    return response.status(204).json();
};

const upDate = (request: Request, response: Response) => {

    const product = updateProduct(Number(request.params.id), request.body);

    return response.status(200).json(product)
}

export const productControllers = {create, get, getOne, remove, upDate};

