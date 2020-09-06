import * as React from 'react';
import {MainTemplate,SubTemplate,Header,Footer} from 'components';
import {AboutContainer} from 'containers';
        
const About = ({history}) =>(
    <MainTemplate header={<Header/>} footer={<Footer/>}>
        <AboutContainer />
    </MainTemplate>
);

export default About;