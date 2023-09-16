import {
  HeaderContainer,
  ActionsContainer,
  LocationButton,
  CartButton,
} from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { products } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logotipo do café" />
      </Link>
      <ActionsContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        <CartButton to="/checkout" quantity={products.length}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
