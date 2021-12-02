export interface userI {

    uid?: string,
    displayName?: string,
    email?: string,
    password?: string,
    phoneNumber?: string,
    photoURL?: string,
    direccion?: DireccionI[],

}

export interface DireccionI {
    id?: string,
    region?: string,
    comuna?: string,
    calle?: string,
    num?: number,
    dpto?: string,
    userId?:string
}
