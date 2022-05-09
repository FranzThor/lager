export default interface OrderItem {
    id: string,
    article_number: number,
    name: string,
    description: string,
    specifiers: Array<string>,
    stock: number,
    location: number,
    price: number
}