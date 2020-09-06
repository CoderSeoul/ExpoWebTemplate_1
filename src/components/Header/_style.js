import styled,{keyframes} from 'styled-components';

export const MenuButton =styled.div`
position:fixed;
right:30px;
top:30px;
z-index:100000;

.menu-button {
    appearance: none;
    color: white;
    background: transparent;
    border: none;
    font-size: 8vmin;
    opacity: 0.7;
    padding: 0;
    line-height: .6;
    cursor: pointer;
    
    &::before {
      content: '≡';
      display: inline-block;
      top: -.1em;
    }
    
    &:hover {
      opacity: 1;
    }
    
  }
`
export const StyledHeader =styled.div`
position:fixed;
top:0;
left:0;
height: 100%;
width: 100%;
overflow:hidden;
z-index:99999;
visibility:hidden;


  .site-title {
    font-size: 3vw;
    margin: 0;
    margin-right: auto;
  }
  
  .site-menu {
    width:100vw;
    height:100vh;
    display: flex;
    overflow: hidden;
  
    > ul, li { 
      margin: 0; padding: 0; list-style-type: none;
    }
  
    > ul {
        width:50vw;
        background:#111;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
  
  
  }
  
  
  .menu-title {
    width:50%;
    height:100vh;
    background: #111;
    justify-self: end;
    align-self: end;
    transform: translateY(100%);
    p{
        font-family: 'GmarketSansBold';
        font-size: 6rem;
    }
  }
  
  
  .menu-items{
    transform: translateY(-100%);
  }
  .menu-item {
    width:50%;
    height:100vh;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    font-size:3rem;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px white;
    transform: translateX(100%);
  }
  
`;
