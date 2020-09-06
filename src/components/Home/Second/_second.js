import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledSecond,Title,CardList} from './_style';
import {Link} from 'react-router-dom';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]

const Second = ({   

}) => {
  const rollingRef = useRef(null);
  
  useEffect(
		() => {
      // gsap.to(".rollingText", 10, {
      //   x: -rollingRef.current.offsetWidth,
      //   ease: Linear.easeNone,
      //   repeat: -1
      // })
    },
		[],
    );

 return (
    <StyledSecond>  
      
      {/* <div className="wrapperRollingText">
        <div ref={rollingRef} className="rollingText text">
          The only Artificial Intelligence Expo in Korea!
        </div>
      </div> */}
        <Title>
          <div className="app-title-content">
            <h1>Latest News</h1>
            <p>Covering March & April 2015</p>
            <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
          </div>
        </Title>
        <CardList>
        <Swiper
            spaceBetween={200}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              PostsData.map((details,key) => 
              <SwiperSlide><Card key={key} details={details}/></SwiperSlide>)
            }
        </Swiper>
        </CardList>
    </StyledSecond>  
 
    );
  };

export default withRouter(Second);

