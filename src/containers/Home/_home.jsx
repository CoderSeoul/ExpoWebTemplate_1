import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Home} from 'components';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import * as THREE from 'three';
import { useMouseWheel } from 'react-use';


const HomeContainer = ({history,match}) =>{

  
  useEffect(
		() => { 
      
    },
		[],
    );

  
    return(
        <>
            <Home 
                history={history}

            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default HomeContainer;
