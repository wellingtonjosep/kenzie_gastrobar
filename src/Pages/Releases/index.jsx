import Button from '../../components/Button';
import {SectionContainer, Content, Container, ButtonContainer, GeneralContainer, CartContainer} from './styles';
import { useHistory} from 'react-router'
import { useContext} from 'react'
import Product from '../../components/ProductReleases'
import { ReleaseContext } from "../../Providers/releases"
import { useEffect } from 'react';
import Header from '../../components/Header';
import waiter from '../../assets/waiter-light.svg'
import {GrCart} from 'react-icons/gr'
import ContainerProducts from '../../components/ContaineProducts';


function ReleasesPage (){

  const token = localStorage.getItem('@token')

  const { handleClick, filterProducts, listProducts, productsRealeases, handleTotalProducts, productsRender  } = useContext(ReleaseContext)

  const history = useHistory()

  const handleNavigation = (path) => {
      return history.push(path)
  }

  useEffect(() => {
    const id = localStorage.getItem('@id')
    const userId = localStorage.getItem("@userId")
    listProducts(id, userId)
  },[])

  return (
    <>
      <Container>
        <Header/>
        <GeneralContainer>
          <Content>
            <SectionContainer>
                <Button onClick={() => handleTotalProducts()}>Todos</Button>
                <Button onClick={() => handleClick("Comidas")}>Comidas</Button>
                <Button onClick={() => handleClick("Bedidas")}>Bebidas</Button>
                <Button onClick={() => handleClick("Sobremesas")}>Sobremesas</Button>
            </SectionContainer>

            <ContainerProducts>
              
            { filterProducts.length === 0 ? (
                
                productsRender.length > 0 ? (     

                  productsRealeases.map((response, index) => {
                  return <Product key={index} info={response}/> })

                ):(

                  null

                )

              ):(
                  filterProducts.map((response, index) => {
                      return <Product key={index} info={response}/>
                  })
              )

            }
            </ContainerProducts>

            <ButtonContainer>
                <Button className='button-table' onClick={() => handleNavigation('/table')}>Lista de mesas</Button>
                {
                  token && <Button className='button-home' onClick={() => handleNavigation('/admin')}>Home</Button>
                }

            </ButtonContainer>
            <img className='image' src={waiter} alt="logotipo Kenzie Gastrobar" />
          </Content>
        </GeneralContainer>
          <CartContainer>
            <GrCart className='Icon-Cart'/>
          </CartContainer>
      </Container>
    </>
  );
}

export default ReleasesPage;
