import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledOrganizers} from './_style';
import {Link} from 'react-router-dom';
import Table from './Table';
const data = [
 {

 },
 {
   pageName:"Co-Organizer",
   Organizers:"Exhibition Outline",
   OrganizersTable:[
     [
       "한국인공지능협회"
       ,"Korea Artificial Intelligence Association is organized on the purpose of popularizing the artificial intelligence industry and developing information network. Artificial intelligence is the core of the fourth industrial revolution and the development of artificial intelligence allows us to make our lives easier and better that’s why we’re committed to researching in this area with leading enterprise executives and decision makers."
       ,"Tel. +82-2-713-4800 / Fax. +82-504-266-5568"
       ,"info@koraia.org"
       ,"www.koraia.org"
    ],
    [
      "seoulMESSE"
      ,"As the specialized organizer of the trade shows, SeoulMESSE Ltd. is holding about 10 trade shows every year such as Global Electric Power Tech, InterCHARM Korea, Seoul Auto Salon and Auto Week, Garment Machinery and Textile Industry Fair , etc. It is the representative private organizer in Korea and received Prime Minister’s award in 2015 in recognition of the contribution to the development of the trade show industry."
      ,"Tel. +82-2-2284-0016 / Fax. +82-2-2284-0005"
      ,"sales@aiexpo.co.kr"
      ,"www.seoulmesse.com"
   ],
   [
    "인공지능신문"
    ,"Artificial Intelligence Newspaper is a professional journalist and professional reporter armed with the experience and know-how accumulated in domestic and foreign ICT field for the past 20 years, and is aiming not only for information and news, but also for providing valuable information and insights to readers. With the background of artificial intelligence, we understand the trends and examples of the artificial intelligence industry including the latest policy, domestic and overseas market, technology and products, and present the latest trends of artificial intelligence."
    ,"Tel. +82-2-6124-3331 / Fax. +82-2-987-3331"
    ,"press0119@hanmail.net "
    ,"www.aitimes.kr"
 ],
     
   ]
 }
]

const Organizers = ({   

}) => {

 return (
    <StyledOrganizers>      
        <Table title={data[1].Organizers} data={data[1].OrganizersTable} />
    </StyledOrganizers>  
    );
  };

export default withRouter(Organizers);

