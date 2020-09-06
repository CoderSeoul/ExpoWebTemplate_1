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
     min-width:15vw;
     background:green;
     &:first-child {
       padding-top: .5em;
       color:#323232;
       background:#fafafa;
       text-align:center;
     }
     &:last-child {
          padding-top:10px;
          padding-bottom:10px;
     }

     @media (min-width: ${breakpoint}) {
      display: table-cell;
      padding: .25em .5em;
      text-align:left;
      &:first-child {
        padding-left: 0;
        max-width:10vw;
      }  
      &:last-child {
        padding-right: 0;

      }
    }

   }
}
        pre{
          width:100%;
          white-space: pre-line;
        }
`;
