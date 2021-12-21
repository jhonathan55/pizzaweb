

export interface OrdersI {
    id?: String,

    userId?: string,
    name?: string,
    email?: string,

    delivery?: boolean,
    sucursalId?: string,
    fecha?: String,
    region?: string,
    comuna?: string,
    calle?: string,
    num?: string,
    dpa?: string,
    details?:DetailsProductI[],
    total:number

}

export interface DetailsOrdersI {
    id?: string,
    orderId?: string,
    details?: DetailsProductI[],
}

export interface DetailsProductI {
    categoriaId?: number,
    description?:string,
    id?:number,
    img?:String,
    name?:String,
    price?:number,
    aqy?:number,
    stock?:number,
   
}
