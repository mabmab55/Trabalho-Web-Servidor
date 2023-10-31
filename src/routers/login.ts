import { Router } from "express";
import { Request } from "../@types";
import { UserRepository } from "src/repositories/user";
import { LoginDTO, SignupDTO } from "src/dto";
import { Database } from "src/db";
import { UserController } from "src/controllers/user";
import "express-async-errors";

export const login = Router();

function controllerFactory() {
    const db = Database.getInstance();
    const userRepository = new UserRepository(db);
    const controller = new UserController(userRepository);

    return {
        controller,
    };
}

login.get("/login", (req, res) => {
    const { controller } = controllerFactory();

    return controller.getLoginPage(req, res);
});

login.get("/signup", (req, res) => {
    const { controller } = controllerFactory();

    return controller.getSignupPage(req, res);
});

login.get("/logout", (req, res) => {
    const { controller } = controllerFactory();

    return controller.logout(req, res);
});

login.post("/login", async (req: Request<LoginDTO>, res) => {
    const { controller } = controllerFactory();

    return controller.login(req, res);
});

login.post("/signup", async (req: Request<SignupDTO>, res) => {
    const { controller } = controllerFactory();

    return controller.signup(req, res);
});
