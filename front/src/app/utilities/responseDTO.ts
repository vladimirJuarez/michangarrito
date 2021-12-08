import { ProductDTO } from "../products/product";

export interface ResponseDTO{
    isSuccess: boolean;
    result: object;
    displayMessage: string;
    errorMessage: string[];
}