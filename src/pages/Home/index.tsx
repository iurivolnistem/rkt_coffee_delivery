import home from '../../assets/home.svg'
import { HeroSection, InformationContainer } from './styles'

export function Home() {
  return (
    <HeroSection>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <InformationContainer>
          <div></div>
          <div></div>
        </InformationContainer>
      </div>
      <img src={home} alt="" />
    </HeroSection>
  )
}
