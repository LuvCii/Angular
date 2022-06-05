export type Product = {
    id: number,
    name: string,
    status: number
};
export type ProductCreate = {
    name?: string,
    status?: number
};