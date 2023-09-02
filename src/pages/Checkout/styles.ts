import styled from 'styled-components'

export const CheckoutContainer = styled.main`
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
export const TextRegularSmall = styled.h6`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme['brown-500']};
`

export const TextRegularMedium = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['brown-500']};
`

export const TextBoldLarge = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['brown-700']};
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
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    flex: 1;
    gap: 0.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:first-child {
      width: 50%;
    }

    input {
      flex: 1;
      background: ${(props) => props.theme['gray-500']};
      padding: 0.75rem;
      border: none;
      border: 1px solid ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['brown-300']};
    }
  }
`

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
export const CartContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
`
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-700']};

  &:first-child {
    padding-top: 0;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  p {
    margin-bottom: 0.5rem;
  }
`

export const ItemActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItemsCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['brown-900']};

  button {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['purple-300']};
    border: 0;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: 0;
  background: ${(props) => props.theme['gray-700']};
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${(props) => props.theme['brown-500']};
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const CartInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const CompleteOrderButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.6;
  font-size: 0.875rem;
  background: ${(props) => props.theme['yellow-300']};
`
