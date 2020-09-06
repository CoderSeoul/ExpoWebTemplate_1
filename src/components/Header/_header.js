import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledHeader,MenuButton} from './_style';
import {Link} from 'react-router-dom';
import {useWindowSize} from 'react-use';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';

const Header = ({   

}) => {
  let tl = undefined;
  
  const onClickMenu = () =>{
    if(!tl){
      tl = gsap.timeline()
      .set('#site',{
        autoAlpha:1
      })
        .to('.menu-item',1,{
          x:0,
          stagger:0.5
        },"-=1")
        .to('.menu-title',1,{
          y:0,
        },"-=1")
        .to('.menu-items',1,{
        y:0
      },"-=1");
    }else if(tl.reversed()){
      tl.play();
    }else{
      tl.reverse();
    }
  }

  useEffect(
		() => { 
    },
		[],
    );
  
 return (
   <>
   <MenuButton>
            <button onClick={onClickMenu} class="menu-button" title="Menu"></button>
          </MenuButton>
    <StyledHeader id="site">           
          <nav class="site-menu">

            <div class="menu-title">
              <p>AI</p>
              <p>EXPO</p>
              <p>2020</p>
            </div>
            
            <ul class="menu-items">
              <li class="menu-item">
                <span>Work</span>
              </li>
              <li class="menu-item" data-active>About</li>
              <li class="menu-item">Services</li>
              <li class="menu-item">Contact</li>
            </ul>
            
          </nav>
    </StyledHeader>  
 </>
    );
  };

export default withRouter(Header);

