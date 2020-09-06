import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledHome} from './_style';
import {Link} from 'react-router-dom';
import {useWindowSize} from 'react-use';
import First from './First';
import Second from './Second';

const Home = ({   

}) => {

 return (
    <StyledHome>  
		<First />
		<Second />
    </StyledHome>  
 
    );
  };

export default withRouter(Home);

