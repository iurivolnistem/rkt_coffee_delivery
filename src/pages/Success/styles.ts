import styled from 'styled-components'

const ICON_COLOR = {
  purple: 'purple-300',
  yellow: 'yellow-300',
  orange: 'yellow-500',
} as const

interface IconInformationProps {
  vairant: 'yellow' | 'purple' | 'orange'
}

export const SuccessContainer = styled.div`
  margin-top: 5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-500']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['brown-700']};
  }
`

export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.25rem;

  div {
    img {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
  }
`

export const InformationContainerWithBorder = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(219, 172, 44);
  background: linear-gradient(
    45deg,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  );
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 1px;
`

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      line-height: 1.3;
      color: ${(props) => props.theme['brown-500']};
    }
  }
`

export const IconContainer = styled.div<IconInformationProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  line-height: 0;
  background: ${(props) => props.theme[ICON_COLOR[props.vairant]]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};

  svg {
    line-height: 0;
  }
`
