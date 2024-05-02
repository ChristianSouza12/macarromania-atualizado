import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css"
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        outline: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: auto; /* Adicionando barra de rolagem */
    }

    
`;
