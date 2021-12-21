export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    qty:number;
    img:string;
    unit_amount?:{value?:string,currency_code?:string}
}