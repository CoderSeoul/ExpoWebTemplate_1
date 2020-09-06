import styled,{keyframes} from 'styled-components';
const breakpoint= "480px";

export const StyledTable =styled.div`

.title{

}

font-size:13px;
.rwd-table {
   margin: 1em 0;
   min-width: 300px; 
   border-top: 3px solid #1670d3;

   td {
     display: block; 
     border-bottom: 1px solid #ddd;
     &:first-child {
       padding-top: .5em;
       color:#323232;
       background:#fafafa;
       text-align:center;
       min-width:25vw;
     }
     &:last-child {
          padding-top:10px;
          padding-bottom:10px;
     }

     @media (min-width: ${breakpoint}) {
      display: block;
      padding: .25em .5em;
      text-align:left;
      &:first-child {
        padding-left: 0;
      }  
      &:last-child {
        padding-right: 0;
      }
    }

   }
}

`;
