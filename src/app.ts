import express, { json } from "express";
import { productsRoutes } from "./routes/products.routes";


export const app = express();

app.use(json());

app.use("/products", productsRoutes);