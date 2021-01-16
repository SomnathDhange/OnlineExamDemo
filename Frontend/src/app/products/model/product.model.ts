export class ProductModel {
    name: string;
    discountPer: string;
    discountPrice: number;
    originalPrice: number;
    category?: string[];
    tags?: string[]
    color?: string;
    isVisiable: boolean
}