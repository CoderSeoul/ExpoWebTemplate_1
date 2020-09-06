import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledWhy} from './_style';
import {Table} from '../../Commons';

const data= [{},{
  title1:'Welcome to the World of "Artificial Intelligence"',
  desc1:'Artificial Intelligence (AI) is emerging as the future core technology and is creating new products and services fused with all industries like manufacturing & production, distribution, knowledge service industry, etc. AI EXPO kOREA wsd held in 2018 for the first time and now it is the ultimate marketing place with companies',
  title2:'One Stop Solution for Potential Customers',
  desc2:[
    ["AI Infra","Cloud Computing (HW,SW)"],
    ["AI SW","AI engine, platform, etc"],
    ["AI Solution","combined solution and Service by industry. etc"]
  ]
}]
const Why = ({   

}) => {

 return (
    <StyledWhy>      
        <img src="http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/why-exhibit_0320_eng.png" />
    </StyledWhy>  
    );
  };

export default withRouter(Why);

