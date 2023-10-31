import { Router } from "express";
import { Request } from "src/@types";
import { UserRepository } from "src/repositories/user";
import { CreateProductDTO } from "src/dto/products";
import { ProductRepository } from "src/repositories";
import { Database } from "src/db";
import { ProductController } from "src/controllers/product";
import "express-async-errors";

export const products = Router();

function controllerFactory() {
    const db = Database.getInstance();
    const productRepository = new ProductRepository(db);
    const userRepository = new UserRepository(db);
    const controller = new ProductController(productRepository, userRepository);

    return {
        controller,
    };
}

products.get("/products", async (req, res) => {
    const { controller } = controllerFactory();

    return controller.findAllProducts(req, res);
});

products.post("/products", async (req: Request<CreateProductDTO>, res) => {
    const { controller } = controllerFactory();

    return controller.createProduct(req, res);
});

products.get("/products/new", async (req, res) => {
    const { controller } = controllerFactory();

    return controller.sendToNewProductPage(req, res);
});

products.get("/products/:id", async (req, res) => {
    const { controller } = controllerFactory();

    return controller.getById(req, res);
});
