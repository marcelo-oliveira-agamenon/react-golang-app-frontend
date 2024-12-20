'use client';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }

     @font-face {
        font-family: "Montserrat Regular";        
        src:local("Montserrat Regular"), url('fonts/Montserrat/Montserrat-Regular.ttf') format("truetype");
    }
    
    @font-face {
        font-family: "Montserrat Medium";
        src: url('fonts/Montserrat/Montserrat-Medium.ttf');
    }

    @font-face {
        font-family: "Montserrat Bold";
        src: url('fonts/Montserrat/Montserrat-Bold.ttf');
    }

    @font-face {
        font-family: "Montserrat Light";
        src: url('fonts/Montserrat/Montserrat-Light.ttf');
    }

    @font-face {
        font-family: "Montserrat Thin";
        src: url('fonts/Montserrat/Montserrat-Thin.ttf');
    }

    @font-face {
        font-family: "Montserrat SemiBold";
        src: url('fonts/Montserrat/Montserrat-SemiBold.ttf');
    }

    body {
        background: #7dbef9;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

    ::-webkit-scrollbar {
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #dddddd;
      }

      ::-webkit-scrollbar-thumb {
        background: grey;
      }
`;
