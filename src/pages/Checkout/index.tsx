import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Minus,
  Plus,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  Title,
  TextBoldLarge,
  AddressCard,
  MessageContainer,
  FormContainer,
  PaymentContainer,
  PaymentActionsContainer,
  CartContainer,
  CartItem,
  ItemContainer,
  ItemActionsContainer,
  CartInformationsContainer,
  CompleteOrderButton,
  RemoveItemButton,
  ItemsCountContainer,
} from './styles'

import expressoTradicional from '../../assets/coffees/ExpressoTradicional.svg'

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
          <FormContainer action="">
            <div>
              <input type="text" placeholder="CEP" />
            </div>
            <div>
              <input type="text" placeholder="Rua" />
            </div>
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
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
        <CartContainer>
          <div>
            <CartItem>
              <ItemContainer>
                <img
                  src={expressoTradicional}
                  alt="Imagem de um café expresso tradicional"
                  width={64}
                />
                <div>
                  <p>Expresso Tradicional</p>
                  <ItemActionsContainer>
                    <ItemsCountContainer>
                      <button>
                        <Minus size={16} />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus size={16} />
                      </button>
                    </ItemsCountContainer>
                    <RemoveItemButton>
                      <Trash size={16} />
                      Remover
                    </RemoveItemButton>
                  </ItemActionsContainer>
                </div>
              </ItemContainer>
              <span>R$ 9,90</span>
            </CartItem>
            <CartItem>
              <ItemContainer>
                <img
                  src={expressoTradicional}
                  alt="Imagem de um café expresso tradicional"
                  width={64}
                />
                <div>
                  <p>Expresso Tradicional</p>
                  <ItemActionsContainer>
                    <ItemsCountContainer>
                      <button>
                        <Minus size={16} />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus size={16} />
                      </button>
                    </ItemsCountContainer>
                    <RemoveItemButton>
                      <Trash size={16} />
                      Remover
                    </RemoveItemButton>
                  </ItemActionsContainer>
                </div>
              </ItemContainer>
              <span>R$ 9,90</span>
            </CartItem>
          </div>
          <CartInformationsContainer>
            <div>
              <span>Total itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <TextBoldLarge>Total</TextBoldLarge>
              <TextBoldLarge>R$ 33,20</TextBoldLarge>
            </div>
            <CompleteOrderButton>Confirmar pedido</CompleteOrderButton>
          </CartInformationsContainer>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
