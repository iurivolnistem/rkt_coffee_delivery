import { styled } from 'styled-components'

export const Product = styled.div`
  width: 100%;
  max-width: 16rem;
  padding: 0 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: -1.25rem;
  }
`

export const ProductTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 1rem;
`

export const ProductTag = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
  padding: 4px 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  line-height: 1.3;
  font-size: 0.625rem;
  font-weight: bold;
`

export const ProductInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-700']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['brown-300']};
    text-align: center;
  }
`

export const ProductActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const ProductCurrency = styled.span`
  line-height: 1.3;
  font-size: 0.875rem;
  color: ${(props) => props.theme['brown-500']};

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 800;
  }
`

export const ProductQuantityContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    background: transparent;
    border: 0;
    line-height: 0;
    color: ${(props) => props.theme['purple-300']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
      transition: color 0.2s;
    }
  }
`

export const ProductAddToCart = styled.button`
  background-color: ${(props) => props.theme['purple-500']};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
`
