import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledOverview} from './_style';
import {Link} from 'react-router-dom';
import {Table} from '../../Commons';
const data = [
 {

 },
 {
   pageName:"Overview",
   slogan:"The only Artificial Intelligence Expo in Korea!",
   desc:"AI EXPO KOREA is the only Artificial Intelligence Expo to extense your business network, and meet your future partners in Korea.Potential buyers will visit AI EXPO KOREA to meet the future artificial intelligence technology, new trends and new products to extend their businesses for various fields, and AI EXPO KOREA will be the best business Platform to helps your businesses.AI EXPO KOREA will be the best chance to meet all of Artificial Intelligence that leads the 4th Industrial Revolution.",
   Outline:"Exhibition Outline",
   OutlineTable:[
     ["Title","AI EXPO KOREA 2020"],
     ["Date","27(Tue.) ~ 29(Thur.), Oct 2020(3days)"],
     ["Venue","Hall D, COEX"],
     ["Scale(Expected)","5 Countries 127 Exhibitors 220 Booths"],
     ["Organizers","Korea Artificial Intelligence Association, SeoulMESSE Ltd., Artificial Intelligence Times"],
     ["Sponsors","HUAWEI, MEGAZONECLOUD, LINKGENESIS, CROWDWORKS, AIMMO, BARUN NEWS TV, ALCHERA"],
     ["Media Partner","TechDaily"],
     ["Supporter","Ministry of Small and Medium-sized Enterprises and Startups, Ministry of Science and Information and Communications Technologies, Seoul Metropolitan Government, Gwangju Institute of Science and Technology, Gwangju Center for Creative Economy & Innovation, Daejeon Center for Creative Economy & Innovation, Yangjae Innovation Hub, National Information Society Agency, National IT Industry Promotion Agency, Korea Institute of Startup & Entrepreneurship Development, Institute of Information & communications Technology Planning & Evaluation, Electronics and Telecommunications Research Institute, Korea Institute of Science and Technology Information, Embassy of the Czech Republic"]
   ],
   ProductSectors:"Product Sectors",
   ProductSectorsTable:[
      ["AI Elemental Technologies","CPU·GPU·FPGA·TPU·BPU, Machine learning, Natural language processing, Deep Learning, Reasoning&Learning Function,Image recognition, AI Computing, AI Solution, AI Platform, etc."],
      ["AI Applications & Services","Smart Data, Medical&Healthcare,Financial Business, Security, Secretary, Predictive Maintenance, AI Concsulting, Marketing&Advertisement, smart education systems etc."],
      ["AI Telecom & Mobile","Smart retail, Smarthome Platform,5G Network, cloud, etc.,Financial Intelligent Device, HardwareㆍSoftware Development Platform, VR / AR, etc."],
      ["AI IoT & Manufacturing","Smart Factory, Production lines, Industrial Robots, IoT, ManufaturingㆍDistributioinㆍRetailing, etc."],
      ["AI Smart City & IoT","Autonomous Driving, Smart Energy, Smart City Construction, Smart Building, Smart Agriculture, Smart Logistics, etc."],
      ["AI & Robotics","AI Service Robot, Agricultural Robot, Security Robot, Disaster Relief Robots,Medical Robot, Special Robot, etc."]
    ] 
 }
]

const Overview = ({   

}) => {

 return (
    <StyledOverview>      
        
        <div className="intro">
            <div className="intro__left">
               
            </div>
            <div className="intro__right">
                <h3>{data[1].slogan}</h3>
                <p>{data[1].desc}</p>
            </div>
        </div>
        <Table title={data[1].Outline} data={data[1].OutlineTable} />
        <Table title={data[1].ProductSectors} data={data[1].ProductSectorsTable} />
    </StyledOverview>  
    );
  };

export default withRouter(Overview);

