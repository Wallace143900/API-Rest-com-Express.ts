export interface IProduct{
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt?: Date;
}

export type TCreateProductData = Pick<IProduct, "name" | "price">;

export type TUpdateProductData = Partial<TCreateProductData>;