import styled from 'styled-components'


export const Container = styled.div`
    background: var(--brown-light);
    height: 100vh;
`

export const Content = styled.div`

`

export const SectionContainer = styled.div`

    padding: 1px 1px 1px 1px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    background: var(--brown-light);
    margin: auto;
    width: 285px;
    margin-top: 15px;


    button{
        font-family: 'Archivo';
        font-style: normal;
        color: var(--black);
        background: transparent;
        height: 25px;
        font-size: 14px;
        border: none;
    }

    button:focus {
        color: var(--orange-dark);
    }

    @media (min-width: 768px) {

        width: 445px;

        button{
            font-size: 18px;
        }
    }


    @media (min-width: 1440px){

        width: 640px;

        button{
            width: 120px;
            font-size: 20px;
        }
    }


`

export const ButtonContainer = styled.div`
    margin-top: 15px;
    width: 290px;
    
    .button-table{
      width: 125px;
      height: 35px;
      border-radius: 8px;
      filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
      color: var(--brown-light);
      background: var(--orange-light);
      border: none;
      font-family: 'Arimo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: var(--brown-light);
    }

    .button-home {
      width: 125px;
      height: 35px;
      border-radius: 8px;
      filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
      color: var(--brown-light);
      background: var(--orange-light);
      border: none;
      font-family: 'Arimo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: var(--brown-light);
      margin-left: 40px;
    }

    @media (min-width: 768px){
        width: 450px;

    }

    @media (min-width: 1440px){
        
        width: 650px;

    }

  
`

export const CardProduct = styled.div`

`

export const CartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid var(--orange-60);

    .Icon-Cart{
        margin: auto;
        margin-top: 7px;
        margin-bottom: 5px;
        font-size: 20px;
    }

    @media (min-width: 768px){
        
        border:none;
        background: var(--orange-60);
        border: none;
        position: absolute;
        bottom: 0px;
        width: 45px;
        height: 45px;
        border-radius: 60%;
        right: 0px;

        .Icon-Cart{

            margin: auto;
            font-size: 25px;

        }

    }

`

export const GeneralContainer = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    height: 87vh;


    div::-webkit-scrollbar {
        display: none;
        
    }

    @media (min-width: 768px){
        
        height: auto;

    }

    @media (min-width: 1440px){
        
        height: 88vh;

    }





`