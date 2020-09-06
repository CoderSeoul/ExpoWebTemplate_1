import * as React from 'react';
import {MainTemplate,Header,Footer} from 'components';
import {HomeContainer} from 'containers';
        
const Home = ({history}) =>(
    <MainTemplate header={<Header/>} footer={<Footer/>}>
        <HomeContainer history={history}/>
    </MainTemplate>
);

export default Home;