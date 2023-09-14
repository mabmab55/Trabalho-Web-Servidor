import { Request as ExpressRequest } from "express";

export type Request<Body> = ExpressRequest<unknown, unknown, Body>;

export interface User {
    name: string;
    email: string;
    password: string;
}

export interface Product {
    id: string;
    model: string;
    img: string;
    price: number;
    detail: string;
    sizes: number[];
    quantity: number;
}
