import { styled } from 'styled-components'

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  padding: 5.875rem 0;

  h1 {
    width: 100%;
    max-width: 588px;
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['brown-900']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-700']};
  }
`

const IconInformationDefault = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    line-height: 0;
    color: ${(props) => props.theme.white};
  }
`

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  margin-top: 4.125rem;
`

export const InformationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    line-height: 1.3;
  }
`

export const CartIconInformation = styled(IconInformationDefault)`
  background-color: ${(props) => props.theme['yellow-500']};
`
export const TimerIconInformation = styled(IconInformationDefault)`
  background-color: ${(props) => props.theme['yellow-300']};
`
export const PackageIconInformation = styled(IconInformationDefault)`
  background-color: ${(props) => props.theme['brown-500']};
`
export const CoffeeIconInformation = styled(IconInformationDefault)`
  background-color: ${(props) => props.theme['purple-300']};
`

export const ProductsSection = styled.section`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    margin-bottom: 3.375rem;
  }
`

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 9rem;
  gap: 2rem;

  @media (min-width: 1920px) {
    gap: 1rem;
  }
`
