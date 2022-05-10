import { createGlobalStyle } from "styled-components";

//AQUI COLOQUEI OS STYLES GLOBAIS PARA PADRONIZAR A APLICACAO

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    :root {
        //add cores para padronizar o codigo
        //ex: --black: #121214;
        //na hora de definir a cor e so usar o var(-- Nome da cor)
    }

    button {
        cursor: pointer;
    }
`;
