import * as React from 'react';
import {MainTemplate,SubTemplate,Header,Footer} from 'components';
import {ExhibitorsContainer} from 'containers';
        
const Exhibitors = ({history}) =>(
    <MainTemplate header={<Header/>} footer={<Footer/>}>
        <ExhibitorsContainer />
    </MainTemplate>
);

export default Exhibitors;