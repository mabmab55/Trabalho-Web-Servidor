import { Request as ExpressRequest } from "express";

export type Request<
    Body = unknown,
    Params = unknown,
    Query = unknown,
> = ExpressRequest<Params, unknown, Body, Query>;
