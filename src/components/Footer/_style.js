import styled,{keyframes} from 'styled-components';


export const StyledFooter =styled.div`

bottom:0;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
height: auto;
overflow: hidden;
background-color: #111;
background-image: radial-gradient(black 1px, transparent 0);
background-size: 3px 3px; 

.slider {
  overflow: hidden;
  width: 100%;
  padding: 3px 3px;
  display: flex;
  justify-content: flex-start; 
}
.slider-container {
  display: flex;
  height: 100%;
  width: 400%;
  flex-shrink: 0;
  align-content: space-between;
  transition: all 0.5s;
}
.slider:nth-child(1),
.slider:nth-child(2),
.slider:nth-child(3) {
  border-right: 2px solid #4b4b4d;
}

.slide {
  flex-basis: 25%;
  flex-shrink: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}

.slider-content__holder {
  flex-grow: 1;
  flex-basis: 50%;
  img{
    width:100%;
    height:auto;
  }
  .content-holder__title {
    color:#fff;
    font-size: 14px;
  }
  .content-holder__score {
    color:#fff;
    font-size: 22px;
    text-align: right;
  }
  .content-holder__percentage {
    font-size: 14px;
    text-align: right;
    span {
      font-size: 10px;
    }
  }
}


.blue {
  color: #1670d3;
}


`;
