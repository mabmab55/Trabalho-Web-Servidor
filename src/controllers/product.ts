import { randomUUID } from "crypto";
import { Response } from "express";
import { Request } from "src/@types";
import { CreateProductDTO } from "src/dto/products";
import { Product } from "src/models/Product";
import { ProductRepository } from "src/repositories";
import { UserRepository } from "src/repositories/user";
import { Validator, checkIfLoggedUserIsAdmin } from "src/utils";
import { createProductSchema } from "src/utils/schemas";

export class ProductController {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly userRepository: UserRepository,
    ) {}

    public async getById(req: Request<unknown, { id: string }>, res: Response) {
        const { id } = req.params;
        const product = await this.productRepository.getById(id);

        if (product) {
            res.render("product", { product: product.toJSON() });
            return;
        }

        return res.render("product", { error: "Tênis não encontrado!" });
    }

    public async sendToNewProductPage(_: Request, res: Response) {
        const user = await this.userRepository.findByEmail(res.locals.email);

        const isAdmin = user ? checkIfLoggedUserIsAdmin(user) : false;

        if (!isAdmin) {
            res.render("notFoundPage");
            return;
        }

        return res.render("newProduct");
    }

    public async createProduct(req: Request<CreateProductDTO>, res: Response) {
        const validator = new Validator();

        const { data, errors } = validator.validate<
            CreateProductDTO,
            Required<CreateProductDTO>
        >(req.body, createProductSchema);

        const { detail, model, price, quantity } = data;

        if (Object.keys(errors).length > 0) {
            res.render("newProduct", {
                error: errors,
                data,
            });
            return;
        }

        const productToCreate = new Product({
            detail,
            id: randomUUID(),
            img: "/assets/tenis11.jpg",
            model,
            price: Number(price),
            quantity: Number(quantity),
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        });

        await this.productRepository.save(productToCreate);

        res.render("productCreated");
    }

    public async findAllProducts(_: Request, res: Response) {
        const user = await this.userRepository.findByEmail(res.locals.email);
        const isAdmin = user ? checkIfLoggedUserIsAdmin(user) : false;

        const products = await this.productRepository.findAll();

        res.render("products", {
            productsArray: products.map((product) => product.toJSON()),
            isAdmin,
        });
    }
}
