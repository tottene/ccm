import { AxiosError } from "axios"
import { ValidationError } from "yup"

export function parseError(error: unknown): string | string[] {
    let message: string | string[]
    if (error instanceof ValidationError) {
        message = error.errors.join(', ')
    }
    if (error instanceof AxiosError) {
        message = error.response?.data.message
    } else if (error instanceof Error) {
        message = error.message
    } else if (typeof error === "string") {
        message = error
    } else if (Array.isArray(error) && error.length > 0 && error.every(item => typeof item === "string")) {
        message = error
    } else {
        message = 'ocorreu um erro'
    }
    return message
}
