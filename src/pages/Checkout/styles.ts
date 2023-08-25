import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`

export const Title = styled.h1`
  font-size: 1.125rem;
  color: ${(props) => props.theme['brown-700']};
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
  line-height: 1.3;
`
const CardDefault = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
`
export const AddressCard = styled(CardDefault)`
  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-700']};

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      display: block;
      color: ${(props) => props.theme['brown-500']};
    }
  }
`

export const FormContainer = styled.div``

export const PaymentContainer = styled(CardDefault)`
  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const PaymentActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;

  button {
    padding: 1rem;
    border: 0;
    gap: 0.75rem;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 6px;
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme['brown-500']};
    transition: background 0.1s;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['brown-100']};
      color: ${(props) => props.theme['brown-700']};
    }
  }
`
