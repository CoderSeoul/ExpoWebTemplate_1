import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledPostShowReport} from './_style';
import {Link} from 'react-router-dom';
import {Table} from '../../Commons';
const data = [
 {

 },
 {
   pageName:"Post Show Report",
   PostShowReport:"2019 Overview",
   PostShowReportTable:[
    ["Title","AI EXPO KOREA 2019"],
    ["Slogan","You are Hidden champions in next AI era!"],
    ["Date","17(Wed) ~ 19(Fri) July 2019 (10:00 ~ 18:00)"],
    ["Venue","Coex, Hall C"],
    ["Organizers","Artificial Intelligence Industry AssociationKorea Artificial Intelligence AssociationArtificial Intelligence TimesSEOULMESSE International Ltd."],
    ["Partners","Ministry of Science and ICT, Czech Investment Agency, Korea Information Technology Service Industry Association, Public Ordering Sector Conference, Korea Software Industry Association, National Information Society Agency, Yangjae R & CD Innovation Hub, Gwangju Institute of Science and Technology, Gwangju Center of Creative Economy & Innovation, Daejeon Regional Office of Meteorology, Daejeon Center of Creative Economy & Innovation, Korea Software Industry Association, Alberta Machine Intelligence Institute, Edmonton Economic Development Corp"],
    ["Facts & Figures","▪ Exhibitors : 5 COUNTRIES / 127 COMPANIES / 200 BOOTH ▪ Visitors : 21,321 (DOMESTIC BUYERS: 13,470 / INTERNATIONAL BUYERS: 334)"],
    ["Exhibit",`▪ AI Technology : Machine Learning, Deep Learning, Neural Network, Reinforcement Learning, Natural Language Processing, Speech Recognition, Image Recognition, AI Chips and Parts, AI Computing, AI Solution, AI Platform, etc. 
    
    ▪ AI Service & Application : Chat bot and Virtual Speech Sheet, Big Data, 5G·Network, IoT, Internet of Things, Autonomous Driving, Medical · Health care, Financial & Business, Security, Manufacturing · Distribution · Retailing, AI Service Robot, Wearable Device, Smart Factory, Smart City · Home, Drone · UAV, Call Centres, Predictive Maintenance, AI Consulting, AI Marketing & Creative, Communications, IT, etc.`]
  ],
  image1:["http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/ai-expo-2019_factsheet_web_1022.png","http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/ai-expo-2019_factsheet_web_1022.png"],
  image2:["http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2019rbt1.jpg","http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/file/2020/ai2019_factsheet_eng_1022.pdf"]
 }
];

const PostShowReport = ({   

}) => {

 return (
    <StyledPostShowReport>      
        <Table 
          title={data[1].PostShowReport} 
          data={data[1].PostShowReportTable} 
          />
        <div className="image1">
            <a href={data[1].image1[1]}><img src={data[1].image1[0]} /></a>
        </div>
        <div className="image1">
            <a href={data[1].image2[1]}><img src={data[1].image2[0]} /></a>
        </div>
    </StyledPostShowReport>  
    );
  };

export default withRouter(PostShowReport);

