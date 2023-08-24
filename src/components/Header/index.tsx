import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo do café" />
      <ActionsContainer>
        <button></button>
        <button></button>
      </ActionsContainer>
    </HeaderContainer>
  )
}
