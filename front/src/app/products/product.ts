export interface ProductDTO{
    productId: number;
    productName: string;
    modelYear?: number; 
}

export interface CreationProductDTO{
    productName: string;
    modelYear: number;
}