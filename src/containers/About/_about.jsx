import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {About,SubTemplate} from 'components';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import * as THREE from 'three';
import { useMouseWheel } from 'react-use';


const data=[
  {name:"Overview",link:"/AiExpoKorea2020/About"},
  {name:"Organizers",link:"/AiExpoKorea2020/About"},
  {name:"Post Show Report",link:"/AiExpoKorea2020/About"},
];

const AboutContainer = ({history,match}) =>{

  
  useEffect(
		() => { 
      
    },
		[],
    );

  
    return(
        <>
          <SubTemplate
              article={
                <About 
                  history={history}
                />
              }/>
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default AboutContainer;
