import { ReactNode, createContext, useState } from 'react'
import { IProductItem } from '../interface/Product'

interface CartContextType {
  children: ReactNode
}

interface ProductOrder extends IProductItem {
  quantity: number
}

interface Order {
  products: ProductOrder[] | undefined
}

export const CartContext = createContext({})

export function CartContextProvider({ children }: CartContextType) {
  const [order, setOrder] = useState<Order>()

  function HandleAddNewItemToCart(newProduct: ProductOrder) {
      if (order !== undefined) {
      }
    }
  }

  return <CartContext.Provider>{children}</CartContext.Provider>
}
