export interface ProductModel {
    id: string,
    name: string,
    description: string,
    category: string,
    image?: string,
    price: number,
    url: string,


    images: Array<{
        id: string;
        url: string;
        
      }>;

}
export interface NewsResponse {
    articles: ProductModel[],
}