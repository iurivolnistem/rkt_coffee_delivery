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

export const InformationContainer = styled.div``
