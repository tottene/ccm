import { InferType, object, string } from "yup";

export const loginSchema = object({
    username: string().required('usuário é obrigatório'),
    password: string().required('senha é obrigatório')
});

export type LoginType = InferType<typeof loginSchema>
