import { Router } from "express";
import { productControllers } from "../controllers/products.controleers";

export const productsRoutes = Router();

// Associando a lógica aos respectivos endereços

productsRoutes.post("/", productControllers.create);

productsRoutes.get("/", productControllers.get);

productsRoutes.get("/:id", productControllers.getOne);

productsRoutes.delete("/:id", productControllers.remove);

productsRoutes.patch("/:id", productControllers.upDate);