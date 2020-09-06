import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Table,Tabs} from '../Commons';
import Why from './Why';
import Howto from './Howto';
import Application from './Application';
import Sponsorship from './Sponsorship';
import Download from './Download';

let data = [
  { name: 'Why Exhibit?', text: <Why /> },
  { name: 'How to Exhibit', text: <Howto /> },
  { name: 'Online Application', text: <Application /> },
  { name: 'Sponsorship Program', text: <Sponsorship /> },
  { name: 'Document Download', text: <Download /> },
];

const Exhibitors = ({   

}) => {

 return (
    <>      
        <Tabs data={data}/>
    </>  
    );
  };

export default withRouter(Exhibitors);

