import {
  SuccessContainer,
  TitleContainer,
  WrapperContainer,
  InformationContainerWithBorder,
  InformationContainer,
  IconContainer,
} from './styles'

import SuccessImage from '../../assets/success.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'

export function Success() {
  const { order } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (order === undefined) {
      navigate('/')
    }
  }, [navigate, order])

  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <WrapperContainer>
        <InformationContainerWithBorder>
          <InformationContainer>
            <div>
              <IconContainer vairant="purple">
                <MapPin weight="fill" width={16} />
              </IconContainer>
              <p>
                Entrega em{' '}
                <strong>
                  {order?.deliveryAddress.street},{' '}
                  {order?.deliveryAddress.number}
                </strong>{' '}
                <br /> {order?.deliveryAddress.neighborhood} -{' '}
                {order?.deliveryAddress.city}, {order?.deliveryAddress.state}
              </p>
            </div>
            <div>
              <IconContainer vairant="yellow">
                <Timer weight="fill" width={16} />
              </IconContainer>
              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div>
              <IconContainer vairant="orange">
                <CurrencyDollar width={16} />
              </IconContainer>
              <p>
                Pagamento na entrega <br />
                <strong>
                  {order?.deliveryAddress.paymentType === 'credit'
                    ? 'Cartão de Crédito'
                    : order?.deliveryAddress.paymentType === 'debit'
                    ? 'Cartão de débito'
                    : 'Dinheiro'}
                </strong>
              </p>
            </div>
          </InformationContainer>
        </InformationContainerWithBorder>
        <div>
          <img
            src={SuccessImage}
            alt="Imagem de um entragador levando o pedido em uma moto."
          />
        </div>
      </WrapperContainer>
    </SuccessContainer>
  )
}
