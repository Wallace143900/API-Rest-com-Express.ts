import express, { json } from "express";
import { productsRoutes } from "./routes/products.routes";


export const app = express();
// A minha API seja capaz de processar o formato JSON
app.use(json());

// Criar rotas de API

app.use("/products", productsRoutes);