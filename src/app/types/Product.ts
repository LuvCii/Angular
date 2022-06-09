export type Product = {
    _id: string,
    name: string,
    price: number,
    desc: string,
    status: number,
};
export type ProductCreate = {
    name?: string,
    price: number,
    desc: string,
    status?: number
};

export type ProductCart = {
    id: number,
    name: string,
    value: number
}