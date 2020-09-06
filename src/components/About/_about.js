import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Table,Tabs} from '../Commons';
import Overview from './Overview';
import Organizers from './Organizers';
import PostShowReport from './PostShowReport';

let data = [
  { name: 'Overview', text: <Overview /> },
  { name: 'Organizers', text: <Organizers /> },
  { name: 'Post Show Report', text: <PostShowReport /> },
];

const About = ({   

}) => {

 return (
    <>      
        <Tabs data={data}/>
    </>  
    );
  };

export default withRouter(About);

