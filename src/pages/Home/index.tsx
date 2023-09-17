import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ProductItem } from '../../components/ProductItem'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import home from '../../assets/home.svg'
import {
  CartIconInformation,
  CoffeeIconInformation,
  HeroSection,
  InformationContainer,
  InformationGroup,
  PackageIconInformation,
  ProductsList,
  ProductsSection,
  TimerIconInformation,
} from './styles'
import { IProductItem } from '../../interface/Product'
import { Loading } from '../../components/Loading'

export function Home() {
  const [coffeesList, setCoffeesList] = useState<IProductItem[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function fetchCoffees() {
    const response = await api.get('coffees')

    setCoffeesList(response.data)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchCoffees()
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <HeroSection>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <InformationContainer>
                <InformationGroup>
                  <CartIconInformation>
                    <ShoppingCart weight="fill" />
                  </CartIconInformation>
                  <p>Compra simples e segura</p>
                </InformationGroup>
                <InformationGroup>
                  <PackageIconInformation>
                    <Package weight="fill" />
                  </PackageIconInformation>
                  <p>Embalagem mantém o café intacto</p>
                </InformationGroup>
                <InformationGroup>
                  <TimerIconInformation>
                    <Timer weight="fill" />
                  </TimerIconInformation>
                  <p>Entrega rápida e rastreada</p>
                </InformationGroup>
                <InformationGroup>
                  <CoffeeIconInformation>
                    <Coffee weight="fill" />
                  </CoffeeIconInformation>
                  <p>O café chega fresquinho até você</p>
                </InformationGroup>
              </InformationContainer>
            </div>
            <img src={home} alt="" />
          </HeroSection>
          <ProductsSection>
            <h2>Nossos cafés</h2>
            <ProductsList>
              {coffeesList.map((coffee) => {
                return <ProductItem key={coffee.id} product={coffee} />
              })}
            </ProductsList>
          </ProductsSection>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
