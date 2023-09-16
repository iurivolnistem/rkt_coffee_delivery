import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCartAmount() {
  const { products } = useContext(CartContext)

  const amount = products.reduce(
    (acc, product) => {
      acc.total += product.quantity * product.price
      acc.totalWithDelivery = acc.total + acc.delivery
      acc.delivery = 3.5

      return acc
    },
    {
      total: 0,
      totalWithDelivery: 0,
      delivery: 0,
    },
  )

  return amount
}
