import { randomUUID } from "crypto";

export interface ProductProps {
    id?: string;
    model: string;
    img: string;
    price: number;
    detail: string;
    sizes: number[];
    quantity: number;
}
type ProductJSON = Required<ProductProps>;

export class Product {
    private _id: string;
    private _model: string;
    private _img: string;
    private _price: number;
    private _detail: string;
    private _sizes: number[];
    private _quantity: number;

    constructor(product: ProductProps) {
        this._id = product.id ?? randomUUID();
        this._model = product.model;
        this._img = product.img;
        this._price = product.price;
        this._detail = product.detail;
        this._sizes = product.sizes;
        this._quantity = product.quantity;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get model(): string {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get img(): string {
        return this._img;
    }

    set img(img: string) {
        this._img = img;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get detail(): string {
        return this._detail;
    }

    set detail(detail: string) {
        this._detail = detail;
    }

    get sizes(): number[] {
        return this._sizes;
    }

    set sizes(sizes: number[]) {
        this._sizes = sizes;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public toJSON(): ProductJSON {
        return {
            id: this._id,
            detail: this._detail,
            img: this._img,
            model: this._model,
            price: this._price,
            quantity: this._quantity,
            sizes: this._sizes,
        };
    }
}
