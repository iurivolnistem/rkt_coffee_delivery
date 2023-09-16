import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  Product,
  ProductInformationContainer,
  ProductTag,
  ProductTagContainer,
  ProductActionsContainer,
  ProductCurrency,
  ProductQuantityContainer,
  ProductAddToCart,
} from './styles'
import { IProductItem } from '../../interface/Product'
import { CurrencyFormatter } from '../../utils/formatter'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

interface ProductItemProps {
  product: IProductItem
}

export function ProductItem({ product }: ProductItemProps) {
  const { HandleAddNewItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const { id, description, name, price, tags, imagem } = product

  function increaseQuantity() {
    if (quantity < 5) {
      setQuantity((state) => (state += 1))
    } else {
      console.log('Não pode')
    }
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity((state) => (state -= 1))
    }
  }

  function AddNewItemToCart() {
    if (quantity > 0) {
      HandleAddNewItemToCart({
        description,
        id,
        imagem,
        name,
        price,
        quantity,
        tags,
      })
    }
  }

  return (
    <Product>
      <img src={imagem} alt="Imagem de uma xicara de café tradicional" />
      <ProductTagContainer>
        {tags.map((tag) => {
          return <ProductTag key={tag.name}>{tag.name}</ProductTag>
        })}
      </ProductTagContainer>
      <ProductInformationContainer>
        <strong>{name}</strong>
        <p>{description}</p>
      </ProductInformationContainer>
      <ProductActionsContainer>
        <ProductCurrency>
          R$ <strong>{CurrencyFormatter(price)}</strong>
        </ProductCurrency>
        <div>
          <ProductQuantityContainer>
            <button onClick={decreaseQuantity}>
              <Minus width={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>
              <Plus width={14} />
            </button>
          </ProductQuantityContainer>
          <ProductAddToCart onClick={AddNewItemToCart}>
            <ShoppingCart weight="fill" width={19} />
          </ProductAddToCart>
        </div>
      </ProductActionsContainer>
    </Product>
  )
}
