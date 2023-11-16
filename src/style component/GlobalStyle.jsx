import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
* {
    background-color : black;
    color : white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif !important;
}
`;
export default GlobalStyle;