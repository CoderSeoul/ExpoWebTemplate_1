import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Exhibitors,SubTemplate} from 'components';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import * as THREE from 'three';
import { useMouseWheel } from 'react-use';


const data=[
  {name:"Overview",link:"/AiExpoKorea2020/Exhibitors"},
  {name:"Organizers",link:"/AiExpoKorea2020/Exhibitors"},
  {name:"Post Show Report",link:"/AiExpoKorea2020/Exhibitors"},
];

const ExhibitorsContainer = ({history,match}) =>{

  
  useEffect(
		() => { 
      
    },
		[],
    );

  
    return(
        <>
          <SubTemplate
              article={
                <Exhibitors 
                  history={history}
                />
              }/>
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default ExhibitorsContainer;
