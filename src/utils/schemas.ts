import { SignupDTO } from "src/dto";
import { Schema } from "./validator";
import { CreateProductDTO } from "src/dto/products";

export const signupSchema: Schema<SignupDTO> = {
    email: { actions: ["isValidEmail"], message: "Email inválido" },
    name: { actions: ["isNonEmptyString"], message: "Nome inválido" },
    password: {
        actions: ["isValidPassword"],
        message: "Senha inválida! Deve ser maior que 4 caracteres.",
    },
};

export const createProductSchema: Schema<CreateProductDTO> = {
    model: { actions: ["isNonEmptyString"], message: "Campo obrigatório" },
    detail: { actions: ["isNonEmptyString"], message: "Campo obrigatório" },
    price: { actions: ["isNumberGreaterThanZero"], message: "Preço inválido" },
    quantity: {
        actions: ["isNumberGreaterThanZero"],
        message: "Quantidade inválida",
    },
};
