import styled,{keyframes} from 'styled-components';


export const StyledBrain =styled.section`

.brainContainer{
    width:300px;
    height:300px;
    max-height:400px;
    max-width:400px;
    position:absolute;
    right:0;
    top:150px;
    transform:translate(-50%,-50%);
    overflow:hidden;
    cursor:pointer;
    z-index:0;
  }
  svg{
    height:100%;
    width:100%;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  }
  path{
  fill:transparent;
  }
  .brainPath{
  stroke:#00ff00;
  stroke-width:1;
  }
  .brainCircle{
  stroke:#00FF00;
  fill:#00FF00;
  }
  .brainRect{
  stroke:#00FF00;
  fill:#00FF00;
  }
  .brainEllipse{
  stroke:#00FF00;
  fill:#00FF00;
  }
  .animatePaths{
  animation: goPath 3000ms alternate infinite;
  }
  .animateCircles{
  animation: goCircle 3000ms alternate infinite;
  }
  .animateRects{
  animation: goRect 3000ms alternate infinite;
  }
  @keyframes goPath {
  to {
    stroke-dashoffset: 0;
  }
  }
  @keyframes goRect {
  to {
    opacity:0;
  }
  }
  @keyframes goCircle {
  0% {
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
  }
  
  
`;
