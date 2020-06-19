import { Interface } from "readline";

export interface StoreItem{
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export interface StoreCategory{
    id: number,
    title: string,
    routeName: string,
    items: StoreItem[]
}