import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledFooter} from './_style';

const data=[
  [
  {
    name:"Korea Articifial Intelligence Association",
    role:"ORGANIZERS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/hyeop-hoe_-yeong-mun.png",
    desc:"Korea Articifial Intelligence Association"
  },
  {
    name:"SeoulMESSE international Lid",
    role:"ORGANIZERS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/me_-yeong-mun.png",
    desc:"Korea Articifial Intelligence Association"
  },
  {
    name:"Articifial Intelligence Newspaper",
    role:"ORGANIZERS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/times_eng_2.png",
    desc:"Korea Articifial Intelligence Association"
  }],[
  {
    name:"Huawei",
    role:"SPONSORS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/huaweicorporatelogo_2018_1.png",
    desc:"Korea Articifial Intelligence Association"
  },
  {
    name:"Megazone Cloud",
    role:"SPONSORS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/me-ga-jon-ra-u-deu.jpg",
    desc:"Korea Articifial Intelligence Association"
  },
  {
    name:"Linkgenesis",
    role:"SPONSORS",
    img:"http://www.aiexpo.co.kr/img_up/shop_pds/aiexpo/design/images/2020/sponsors_linkgenesiskr_1-01.png",
    desc:"Korea Articifial Intelligence Association"
  }
]
]

const Footer = ({   

}) => {
 
useEffect(
  () => { 
 
    const  initializeSlider = (
      selector, 
      interval = 2000, 
      transitionDuration = 3
      ) =>{
      const slider = document.getElementById(selector);
      const sliderWrapper = slider.querySelector(".slider-container");
      let direction;
      
      sliderWrapper.addEventListener(
        "transitionend",
        function() {
          sliderWrapper.appendChild(sliderWrapper.firstElementChild);
          sliderWrapper.style.transition = "none";
          sliderWrapper.style.transform = "translate(0)";
          setTimeout(() => {
            sliderWrapper.style.transition = `all ${transitionDuration}s`;
          });
        }
      );
      
      // Runs The slider in cyclic manner
      setInterval(() => {
        direction = -1;
        slider.style.justifyContent = "flex-start";
        sliderWrapper.style.transform = "translate(-25%)"; // moves the slides
      }, interval);
    }

    initializeSlider("slider-one");
    initializeSlider("slider-two");

  },
  [],
  );

 return (
   <>
    <StyledFooter>           
        <div className="slider" id="slider-one">
          <div className="slider-container">
            {
              data[0].map((slide,i)=>{
                return(
                  <div className="slide">
                    <div className="slider-content__holder" data-position="left">
                      <img src={slide.img} alt={slide.name}/>
                    </div>
                    <div className="slider-content__holder" data-position="right">
                      <h5 className="content-holder__score">{slide.role}</h5>
                      <p className="content-holder__percentage blue">
                        <span>&#9650;</span>  {slide.desc}
                      </p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
      </div>
      <div className="slider" id="slider-two">
          <div className="slider-container">
            {
              data[1].map((slide,i)=>{
                return(
                  <div className="slide">
                    <div className="slider-content__holder" data-position="left">
                      <img src={slide.img} alt={slide.name}/>
                    </div>
                    <div className="slider-content__holder" data-position="right">
                      <h5 className="content-holder__score">{slide.role}</h5>
                      <p className="content-holder__percentage blue">
                        <span>&#9650;</span>  {slide.desc}
                      </p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
      </div>
    </StyledFooter>  
 </>
    );
  };

export default withRouter(Footer);

