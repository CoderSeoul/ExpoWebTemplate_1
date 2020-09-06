import styled,{keyframes} from 'styled-components';


export const StyledSecond =styled.section`
    width:100%;
    height:100vh;
    position:relative;    
    display:block;
    align-items:center;
    justify-content:center;
    overflow-X:hidden;
    background:#111;

  .wrapperRollingText {
    white-space: nowrap;
    font-family: 'Playfair Display', sans-serif;
    margin-top: 20px;  
  }
  .rollingText {
    font-family: 'GmarketSansBold';
    font-size: 6vw;
    display: inline-block;
  }
  @media(min-width:768px) {
    display:flex;
  }
`;

export const Title =styled.div`
  width: 100%;
  height:100px;
  position:relative;
  color:#fff;
  margin-top:50px;
  @media(min-width:768px) {
    width: 20%;
  }
  
  h1 {
    font-size: 52px;
    margin: 0;
  }
  
  p {
    font-weight: 200;
    opacity: .5;
  }

  
.app-title-content {
  position:relative;
  left: 50%;
  width:100%;
  text-align:center;
  transform:translate(-50%, -50%);
  
  @media(min-width:768px) {
    width:auto;
    position:absolute;
    text-align:left;
  }
}
`;

export const CardList =styled.div`

width:100%;
cursor:grab;

&::-webkit-scrollbar { 
  display: none; 
}

@media(min-width:768px) {
    width:80%;
    white-space:nowrap;
    margin-top: 0;
}
`;