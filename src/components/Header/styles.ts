import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
`

const DefaultButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  line-height: 1.3;
  font-size: 0.875rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationButton = styled(DefaultButton)`
  color: ${(props) => props.theme['purple-500']};
  background: ${(props) => props.theme['purple-100']};

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const CartButton = styled(DefaultButton)`
  background: ${(props) => props.theme['yellow-100']};
  position: relative;
  color: ${(props) => props.theme['yellow-500']};

  &::after {
    width: 1.25rem;
    height: 1.25rem;
    content: '3';
    position: absolute;
    background: ${(props) => props.theme['yellow-500']};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    color: ${(props) => props.theme.white};
    top: -8px;
    right: -8px;
  }
`
