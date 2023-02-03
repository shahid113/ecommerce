export interface ProductObject {
    products: Products
  }
  
  export interface Products {
    docs: Doc[]
    totalDocs: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: any
    nextPage: number
  }
  
  export interface Doc {
    _id: string
    name: string
    description: string
    price: number
    category: string
    stock: number
    user: string
    imagePath: string
    createdAt: string
    __v: number
  }
  