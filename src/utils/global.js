import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *,
 *::before,
 *::after{
     margin:0;
     padding:0;
     box-sizing:inherit;
 }

 html{
     box-sizing:border-box;
     --color-main:${(props) => props.theme.colors.main};
     --color-white:${(props) => props.theme.colors.white};
     --color-headerGreen:${(props) => props.theme.colors.headerGreen};
     --color-black:${(props) => props.theme.colors.black}
 }

 body{
     font-family:'Roboto',sans-serif;
 }

 a,input,textarea,button{
     outline:none;
     text-decoration:none;
     font-family:inherit;
 }
 `;
