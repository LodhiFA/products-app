/* Typescript model for product data fetched from CSV */
export interface IProductModel {
  title: string
  gtin: string
  gender: string
  sale_price: string
  price: string
  image_link: string
  additional_image_link: string
}

/* Typescript model for search filter */
export interface IFilterModel {
  query: string
  gender: string
  sale: boolean
}