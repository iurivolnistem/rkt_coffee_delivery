export interface IProductTag {
  name: string
}

export interface IProductItem {
  id: number
  name: string
  description: string
  price: number
  tags: IProductTag[]
  imagem: string
}
