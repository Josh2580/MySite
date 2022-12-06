import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Tahoma, sans-serif;
        overflow-x: hidden;
    };
    html {
        @media (max-width: 919px) {
            font-size: 14px;
        }
    }
    h1{
        font-size: 3rem;
        color: #0f0f2c;
        font-weight: lighter;

    };

    h2{
        font-size: 2rem;
        color: #0f0f2c;
        padding-bottom: 1rem;
    }

    h3{
        font-size: 1.5rem;
        color: #0f0f2c;
    }
    h4{
        font-size: 1.2rem;
        color: #0f0f2c;
        
    }

    p{
        font-size: 1rem;
        color: #272727;
        line-height: 1.5;
    };

    a{
        cursor: pointer;
    }

`;

export default GlobalStyle;
