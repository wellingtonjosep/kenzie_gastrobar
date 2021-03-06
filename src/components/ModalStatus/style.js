import styled, {keyframes} from 'styled-components'

export const animation = keyframes`
  from{top: -100px}
  to{top: 250px}
`

export const ContainerModal = styled.div`
    z-index: 1;
    position: fixed;
    background-color: rgb(0,0,0,0.50);
    width: 100vw;
    height: 100vh;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
        background-color: var(--brown);
        width: 280px;
        height: 300px;
        border-radius: 6px;
        position: absolute;
        animation: ${animation} 1.5px;
        animation-fill-mode: forwards;
        padding-bottom: 15px;
    }

    .header-modal {
        background-color: var(--orange-dark);
        border-radius: 6px 6px 0px 0px;
        height: 50px;
        padding-left: 10px;
        padding-top: 10px;

        font-family: Source Sans Pro;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;

        color: #fff;
        position: relative;
    }

    .button-exit {
        position: absolute;
        top: 11px;
        left: 250px;
        background-color: var(--orange-dark);

        font-family: Source Sans Pro;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;

        border: none;
        color: var(--brown);
        :hover {
            color: var(--red);
        }
    }

    .showcase {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        height: 240px;
    }

    .showcase::-webkit-scrollbar {
        display: none;
    }

    .employee {
        position: relative;
        width: 270px;
        height: 100px;
        align-items: center;
        display: flex;
        margin-top: 10px;
        background-color: var(--orange-dark);
        justify-content: space-between;

        border-radius: 8px;
    }

    li {
        margin-top: 10px;
    }

    .name {
        margin-left: 10px;
        width: 150px;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;

        font-family: Arimo;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        color: #fff;
    }

    .id {
        margin-left: 10px;
        width: 150px;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;

        font-family: Arimo;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        color: #fff;
    }

    .total-sales {
        margin-left: 10px;
        width: 150px;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;

        font-family: Arimo;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        color: #fff;
    }

    .delete-employee {
        position: absolute;
        left: 205px;
        margin-right: 10px;
        background-color: var(--orange-dark);

        font-family: Arimo;
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;

        border: none;
        color: var(--brown);
        :hover {
            color: var(--red);
        }
    }

    @media (min-width: 768px) {
        .modal {
            width: 450px;
            position: absolute;
            animation: ${animation} 1.5px;
            animation-fill-mode: forwards;
        }

        .header-modal {
            padding-left: 20px
        }

        .button-exit {
            left: 420px;
        }

        .showcase {
            flex-wrap: wrap;
            overflow: visible;
            overflow-y: auto;
            justify-content: flex-start;
        }

        .employee {
            height: 100px;
            width: 210px;
            flex-wrap: wrap;
            margin-left: 10px;
        }

        .ul-employee {
            margin-bottom: 10px;
        }

        .delete-employee {
            top: 35px;
            left: 145px;
        }
    }


`