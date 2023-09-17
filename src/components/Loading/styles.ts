import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #8047f8 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #8047f8);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`
