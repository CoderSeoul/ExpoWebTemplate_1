import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledCard,CardHeader,CardBody} from './_style';


const Card = ({   
details,

}) => {
    const {image,category,title,text} = details;
 return (
    <StyledCard background={image}>  
            <div class="date">
                <span class="day">{category}</span>
                <span class="month">2/28</span></div>
            <div className="figcaption">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        <div class="hover"><i class="ion-android-open"></i></div>
        <a href="#"></a>
    </StyledCard>  
 
    );
  };

export default Card;

