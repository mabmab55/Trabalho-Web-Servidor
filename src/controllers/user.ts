import { Response } from "express";
import { Request } from "src/@types";
import { LoginDTO, SignupDTO } from "src/dto";
import { UserRepository } from "src/repositories/user";
import { Validator, isLogged } from "src/utils";
import { signupSchema } from "src/utils/schemas";

export class UserController {
    constructor(private readonly userRepository: UserRepository) {}

    public async getLoginPage(req: Request, res: Response) {
        if (isLogged(req.cookies.session)) {
            res.redirect("/");
            return;
        }

        res.render("login", { layout: "public" });
    }

    public async getSignupPage(req: Request, res: Response) {
        if (isLogged(req.cookies.session)) {
            res.redirect("/");
            return;
        }

        res.render("signup", { layout: "public" });
    }

    public async logout(req: Request, res: Response) {
        res.clearCookie("session");

        res.redirect("/login");
    }

    public async login(req: Request<LoginDTO>, res: Response) {
        const { password, email } = req.body;

        if (!password || !email) {
            res.render("login", {
                error: "Tentativa de login inválida.",
                layout: "public",
            });
            return;
        }

        const foundUser = await this.userRepository.findByEmail(email);

        if (!foundUser || foundUser.password !== password) {
            res.render("login", {
                error: "Usuário ou senha incorreto.",
                layout: "public",
                email,
            });
            return;
        }

        res.cookie(
            "session",
            JSON.stringify({
                email,
                expiresIn: new Date().getTime() + 1000 * 60 * 60,
            }),
        );

        res.redirect("/");
    }

    public async signup(req: Request<SignupDTO>, res: Response) {
        const validator = new Validator();

        const { data, errors } = validator.validate<
            SignupDTO,
            Required<SignupDTO>
        >(req.body, signupSchema);

        if (Object.keys(errors).length > 0) {
            return res.render("signup", {
                error: errors,
                layout: "public",
                data,
            });
        }

        const { email, name, password } = data;

        res.cookie(
            "session",
            JSON.stringify({
                email,
                expiresIn: new Date().getTime() + 1000 * 60 * 60,
            }),
        );

        await this.userRepository.save({
            email,
            name,
            password,
            isAdmin: false,
        });

        res.render("successLogin", { layout: "public" });
    }
}
