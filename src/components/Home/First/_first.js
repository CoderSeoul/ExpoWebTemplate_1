import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledFirst} from './_style';
import {Link} from 'react-router-dom';
import {useWindowSize} from 'react-use';
import Particles from 'react-particles-js';

const First = ({   

}) => {

 return (
    <StyledFirst>  
		<div className="title">
			<h1>
				AI EXPO KOREA <br/>
				2020
			</h1>
			<p>2020년 10월 27일(화) ~ 29일(목), 3일간 | 서울 COEX Hall D</p>
		</div>
        <div className="buttonSet">
            <button>
                <p>참가업체</p>
                <b>온라인 참가신청</b>
            </button>
            <button>
                <p>참관객</p>
                <b>온라인 사전등록</b>
            </button>
        </div>
		<Particles className="aaa"/>
		
		<div className="fullsize-bg2"/>
		<div className="fullsize-bg1"/>
		
    </StyledFirst>  
 
    );
  };

export default withRouter(First);

