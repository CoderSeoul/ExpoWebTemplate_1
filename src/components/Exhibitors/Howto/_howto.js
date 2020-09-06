import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledHowto} from './_style';
import {Table} from '../../Commons';


const data = [
  {

  },{
    step:[
      {
        name:"Online registration",
        desc:"Submit an application form by E-mail or fax"
      },
      {
        name:"<1 payment>",
        desc:"50% of the total participation fee should be paid within 7 days upon submission of the application form"
      },
      {
        name:"Make the full payment of the participation fee",
        desc:"by 18th Sep, 2020"
      },
      {
        name:"Submit the exhibitor utility forms",
        desc:"All balances must be paid by 25th Sep, 2020"
      },
      {
        name:"The opening day of AI EXPO KOREA",
        desc:"27th Oct, 2020"
      }
]
  }
]


const Howto = ({   

}) => {

 return (
    <StyledHowto>      
             <div>
  <div className="row">
    <div className="col-md-12">

        <ul className="stepper stepper-vertical">
          {
            data[1].step.map((step,i)=>{
              return(
                <li className="active">
                    <a href="#!">
                        <span className="circle">{i}</span>
                        <span className="label">{step.name}</span>
                    </a>     
                    <div className="step-content grey lighten-3">
                        <p>{step.desc}</p>
                    </div>
                </li>
              )
            })
          }
        </ul>

    </div>
</div>

</div>
    </StyledHowto>  
    );
  };

export default withRouter(Howto);

