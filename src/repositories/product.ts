import { Database } from "src/db";
import { Product, ProductProps } from "src/models/Product";

export class ProductRepository {
    constructor(private readonly db: Database) {}

    async findAll(): Promise<Product[]> {
        const products = await this.db.query<ProductProps>(
            "SELECT * FROM product",
        );

        return products.map((product) => new Product(product));
    }

    async getById(id: string): Promise<Product | undefined> {
        const [product] = await this.db.query<ProductProps>(
            "SELECT * FROM product WHERE id = ?",
            [id],
        );

        if (!product) {
            throw new Error("Produto não encontrado");
        }

        return new Product(product);
    }

    async save(product: Product): Promise<void> {
        await this.db.query<void>(
            "INSERT INTO product(id, model, img, price, detail, sizes, quantity) VALUES(?, ?, ?, ? ,? ,?, ?)",
            [
                product.id,
                product.model,
                product.img,
                product.price,
                product.detail,
                product.sizes,
                product.quantity,
            ],
        );
    }
}
