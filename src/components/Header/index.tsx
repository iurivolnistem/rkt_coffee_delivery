import {
  HeaderContainer,
  ActionsContainer,
  LocationButton,
  CartButton,
} from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo do café" />
      <ActionsContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
