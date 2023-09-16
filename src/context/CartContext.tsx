import { ReactNode, createContext, useState } from 'react'
import { IProductItem } from '../interface/Product'
import { api } from '../lib/axios'
import { AxiosResponse } from 'axios'

interface CartContextProps {
  children: ReactNode
}

export interface ProductOrder extends IProductItem {
  quantity: number
}

interface NewOrderInputs {
  zipcode: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
}

interface Order {
  deliveryAddress: NewOrderInputs
  products: ProductOrder[]
  createdAt: Date
}

interface CartContextType {
  products: ProductOrder[]
  HandleAddNewItemToCart: (data: ProductOrder) => void
  HandleRemoveProductFromCart: (id: number) => void
  CreateNewOrder: (data: NewOrderInputs) => Promise<AxiosResponse>
  resetStateOfProducts: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [products, setProducts] = useState<ProductOrder[]>([])

  function HandleAddNewItemToCart(data: ProductOrder) {
    if (products.length === 0) {
      setProducts((state) => [...state, data])
    } else {
      const indexExistingProduct = products.findIndex(
        (product) => product.id === data.id,
      )

      if (indexExistingProduct !== -1) {
        setProducts((state) => {
          state[indexExistingProduct].quantity = data.quantity

          return state
        })
      } else {
        setProducts((state) => [...state, data])
      }
    }
  }

  function HandleRemoveProductFromCart(id: number) {
    const productsWithoutRemovedOne = products.filter((product) => {
      return product.id !== id
    })

    setProducts((state) => {
      state = productsWithoutRemovedOne

      return state
    })
  }

  async function CreateNewOrder(data: NewOrderInputs) {
    const {
      zipcode,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      paymentType,
    } = data

    const newOrder: Order = {
      deliveryAddress: {
        zipcode,
        street,
        number,
        complement,
        neighborhood,
        city,
        paymentType,
        state,
      },
      products,
      createdAt: new Date(),
    }

    const response = await api.post('orders', {
      order: newOrder,
    })

    return response
  }

  function resetStateOfProducts() {
    setProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        HandleAddNewItemToCart,
        products,
        HandleRemoveProductFromCart,
        CreateNewOrder,
        resetStateOfProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
