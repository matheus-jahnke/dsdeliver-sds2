export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    lat: number;
    lng: number;
    address: string;
}

type ProductId = {
    id : Number;
}

export type OrderPayload =  {
    products: ProductId[];
} & OrderLocationData;
