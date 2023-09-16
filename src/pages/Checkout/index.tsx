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
  FormInputGroupContainer,
  PaymentTypeButton,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CurrencyFormatter } from '../../utils/formatter'
import { useCartAmount } from '../../hooks/useCartAmount'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Router } from '../../Router'
import { useNavigate } from 'react-router-dom'

const CheckoutFormSchema = zod.object({
  zipcode: zod
    .string()
    .length(8, 'O campo CEP deve conter 8 caracteres! Sem espaços e traços'),
  street: zod
    .string()
    .min(5, 'O campo Rua deve conter no mínimo 5 caracteres!')
    .max(50, 'O campo Rua deve conter no máximo 50 caracteres!'),
  number: zod.number(),
  complement: zod.optional(zod.string()),
  neighborhood: zod
    .string()
    .min(5, 'O campo Bairro deve conter no mínimo 5 caracteres!')
    .max(50, 'O campo Bairro deve conter no máximo 50 caracteres!'),
  city: zod
    .string()
    .min(5, 'O campo Bairro deve conter no mínimo 5 caracteres!')
    .max(50, 'O campo Bairro deve conter no máximo 50 caracteres!'),
  state: zod.string().length(2, 'O campo UF deve conter 2 caracteres!'),
  paymentType: zod.enum(['credit', 'debit', 'money']),
})

type CheckoutFormInputs = zod.infer<typeof CheckoutFormSchema>

export function Checkout() {
  const navigate = useNavigate()
  const {
    products,
    HandleRemoveProductFromCart,
    CreateNewOrder,
    resetStateOfProducts,
  } = useContext(CartContext)
  const amount = useCartAmount()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(CheckoutFormSchema),
  })

  const isConfirmOrderDisabled = products.length === 0 && isSubmitting

  function removeProductFromCart(id: number) {
    HandleRemoveProductFromCart(id)
  }

  function handleCreateNewOrder(data: CheckoutFormInputs) {
    const {
      zipcode,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      paymentType,
    } = data

    const response = CreateNewOrder({
      zipcode,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      paymentType,
    })

    response.then((resp) => {
      resp.status === 201 && navigate('/success')
      resetStateOfProducts()
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <AddressCard>
        <Title>Complete seu pedido</Title>
        <div>
          <MessageContainer>
            <MapPinLine size={22} />
            <p>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </MessageContainer>
          <FormInputGroupContainer>
            <div>
              <input
                type="text"
                placeholder="CEP"
                required
                {...register('zipcode')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Número"
                required
                {...register('number', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                required
                {...register('neighborhood')}
              />
              <input
                type="text"
                placeholder="Cidade"
                required
                {...register('city')}
              />
              <input
                type="text"
                placeholder="UF"
                required
                {...register('state')}
              />
            </div>
          </FormInputGroupContainer>
        </div>
      </AddressCard>
      <CartContainer>
        <Title>Cafés selecionados</Title>
        <div>
          {products.map((product) => {
            return (
              <CartItem key={product.id}>
                <ItemContainer>
                  <img
                    src={product.imagem}
                    alt="Imagem de um café expresso tradicional"
                    width={64}
                  />
                  <div>
                    <p>{product.name}</p>
                    <ItemActionsContainer>
                      <ItemsCountContainer>
                        <button>
                          <Minus size={16} />
                        </button>
                        <span>{product.quantity}</span>
                        <button>
                          <Plus size={16} />
                        </button>
                      </ItemsCountContainer>
                      <RemoveItemButton
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        <Trash size={16} />
                        Remover
                      </RemoveItemButton>
                    </ItemActionsContainer>
                  </div>
                </ItemContainer>
                <span>R${CurrencyFormatter(product.price)}</span>
              </CartItem>
            )
          })}
          <CartInformationsContainer>
            <div>
              <span>Total itens</span>
              <span>R$ {CurrencyFormatter(amount.total)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {CurrencyFormatter(amount.delivery)}</span>
            </div>
            <div>
              <TextBoldLarge>Total</TextBoldLarge>
              <TextBoldLarge>
                R$ {CurrencyFormatter(amount.totalWithDelivery)}
              </TextBoldLarge>
            </div>
            <CompleteOrderButton
              type="submit"
              disabled={isConfirmOrderDisabled}
            >
              Confirmar pedido
            </CompleteOrderButton>
          </CartInformationsContainer>
        </div>
      </CartContainer>
      <PaymentContainer>
        <div>
          <MessageContainer>
            <CurrencyDollar size={22} />
            <p>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </MessageContainer>
          <Controller
            control={control}
            name="paymentType"
            render={({ field }) => {
              return (
                <PaymentActionsContainer
                  onValueChange={field.onChange}
                  value={field.value}
                  required
                >
                  <PaymentTypeButton value="credit">
                    <CreditCard size={16} /> Cartão de Crédito
                  </PaymentTypeButton>
                  <PaymentTypeButton value="debit">
                    <Bank size={16} />
                    Cartão de Débito
                  </PaymentTypeButton>
                  <PaymentTypeButton value="money">
                    <Money size={16} />
                    Dinheiro
                  </PaymentTypeButton>
                </PaymentActionsContainer>
              )
            }}
          ></Controller>
        </div>
      </PaymentContainer>
    </FormContainer>
  )
}
