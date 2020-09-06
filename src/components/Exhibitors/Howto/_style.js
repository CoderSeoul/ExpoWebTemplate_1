import styled,{keyframes} from 'styled-components';

export const StyledHowto =styled.div`
 
.stepper-vertical li {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  
  .stepper-vertical li {
    display: flex;
  
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
  }
  
  .stepper-vertical li:not(:last-child):after {
    content: " ";
    position: absolute;
    width: 1px;
    height: -webkit-calc(100% - 40px);
    height: calc(100% - 40px);
    left: 35px;
    top: 55px;
    background-color: rgba(0,0,0,.1)
  }
  
  .stepper-vertical li a {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative
  }
  
  .stepper-vertical {
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
    
  }
  
  .stepper-vertical, .stepper-vertical li {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal
  }
  
  .stepper-vertical li.completed a .label {
    font-weight: 500;
    color: rgba(0,0,0,.87);
    font-family: Roboto,sans-serif;
  }
  
  .stepper li.active a .label, .stepper li.completed a .label {
    font-weight: 600;
    color: rgba(0,0,0,.87);
  }
  
  .stepper li a {
    padding: 20px 24px 20px 24px;
    font-size: 14px;
    text-align: center;
    color: #0275d8;
    text-decoration: none;
    cursor: pointer;
  }
  
  .stepper li.active a .circle,.stepper li.completed a .circle {
    background-color: #4285F4!important
  }
  
  .stepper-vertical li a .circle {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
  
  .stepper li a .circle {
    display: inline-block;
    color: #fff;
    border-radius: 50%;
    background: rgba(0,0,0,.38);
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin-right: 8px;
    text-align: center;
  }
  
  .stepper li a .label {
    display: inline-block;
    color: rgba(0,0,0,.38);
  }
  
  .stepper-vertical li.completed a .label {
    font-weight: 500;
  }
  
  .stepper-vertical li a .label {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
  
  .stepper-vertical li .step-content {
    display: block;
    margin-top: 0;
    margin-left: 50px;
    padding: 0px;
    box-sizing: inherit;
  }
  
  
`;