import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledSub,MenuButton} from './_style';
import {Link} from 'react-router-dom';
import {useWindowSize} from 'react-use';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import Brain from './Brain';

const Sub = ({   
    article
}) => {

 return (
    <StyledSub>       
        <header>
            <div class="header-banner">
            <Brain/>
            </div>
            <div class="clear"></div>
        </header>
        <section class="content">
            <article>
                {article}
            </article>
        </section> 
    </StyledSub>  
    );
  };

export default withRouter(Sub);

