import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }
    body {
        background: #7dbef9;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root {
        height: 100%;
    }
`;
