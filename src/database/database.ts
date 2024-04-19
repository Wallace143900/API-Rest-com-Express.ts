import { IProduct } from "../interfaces/products.interface";

export const productList: IProduct[] = [];

export let id = 0;

export function generateId(){
    id++;

    return id;
}