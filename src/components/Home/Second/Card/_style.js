import styled,{keyframes} from 'styled-components';


export const StyledCard =styled.article`
    background: url(${props=>props.background});
    background-size:cover;
    color: #ffffff;
    margin: 10px;
    max-width: 250px;
    min-width: 210px;
    height:200px;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 100%;
    white-space: normal;
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
      }
    .figcaption {
        padding: 25px 20px 25px;
        position: absolute;
        bottom: 0;
        z-index: 1;
      }
    .date {
        background-color: #fff;
        color: #333;
        font-size: 18px;
        font-weight: 800;
        min-height: 48px;
        min-width: 48px;
        padding: 10px 0;
        position: absolute;
        right: 15px;
        text-align: center;
        text-transform: uppercase;
        top: 0;
        span {
            display: block;
            line-height: 14px;
          }
        .month {
            font-size: 11px;
          }
      }
     
      
     h3 {
        font-weight: 800;

      }
     p{
        font-size:5px;
     }
     .hover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        background-color: rgba(236, 188, 46, 0.75);
        display: flex;
        font-size: 65px;
        justify-content: center;
        opacity: 0;
      }
      
      a {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: 1;
      }
      
      &:hover .hover,
      &.hover .hover {
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
        opacity: 1;
      }
      
      &:hover figcaption,
      &.hover figcaption {
        opacity: 0;
      }
      
      &:hover .date,
      &.hover .date {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
      }
`;

