import { Request as ExpressRequest } from "express";

export type Request<Body> = ExpressRequest<unknown, unknown, Body>;

export interface User {
    name: string;
    email: string;
    password: string;
}
