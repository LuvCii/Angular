export type Product = {
    _id: string,
    name: string,
    img: string,
    price: number,
    sale_price: number,
    quantity: number,
    category: string,
    desc: string,
    status: number,
};
export type ProductCreate = {
    name?: string,
    // img: string,
    // price: number,
    // sale_price: number,
    // quantity: number,
    // desc: string,
    status?: number,
};

export type ProductCart = {
    _id: string,
    name: string,
    img: string,
    price: number,
    sale_price: number,
    quantity: number,
    category: string,
    desc: string,
    value: number
}