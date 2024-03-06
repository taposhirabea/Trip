export interface ProductModel {
    id: string,
    name: string,
    description: string,
    category: string,
    image?: string,
}
export interface NewsResponse {
    articles: ProductModel[],
}