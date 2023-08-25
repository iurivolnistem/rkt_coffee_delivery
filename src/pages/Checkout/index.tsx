import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  Title,
  AddressCard,
  MessageContainer,
  FormContainer,
  PaymentContainer,
  PaymentActionsContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressCard>
          <MessageContainer>
            <MapPinLine size={22} />
            <p>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </MessageContainer>
          <FormContainer>
            <form action=""></form>
          </FormContainer>
        </AddressCard>
        <PaymentContainer>
          <MessageContainer>
            <CurrencyDollar size={22} />
            <p>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </MessageContainer>
          <PaymentActionsContainer>
            <button>
              <CreditCard size={16} /> Cartão de Crédito
            </button>
            <button>
              <Bank size={16} />
              Cartão de Débito
            </button>
            <button>
              <Money size={16} />
              Dinheiro
            </button>
          </PaymentActionsContainer>
        </PaymentContainer>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
      </div>
    </CheckoutContainer>
  )
}
