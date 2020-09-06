import styled,{keyframes} from 'styled-components';

export const StyledSub =styled.div`


background:#fff;
color: #292f36;
font-family: helvetica;
line-height: 1.6;

header {
  background:#111;
  height: 260px;
  z-index: 10;
}
.header-banner {
  content: ""; 
  
  background-color: #111;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 3px 3px; 
  width: 100%;
  height: 260px;
}

header h1 {
  background-color: rgba(18,72,120, 0.8);
  color: #fff;
  padding: 0 1rem;
  position: absolute;
  top: 2rem; 
  left: 2rem;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
}

nav {
  width: 100%;
  height: 60px;
  background-color: #111;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 3px 3px; 
  border-bottom: 6px solid #fff;
  z-index: 10;
  visibility:hidden;
  a{
    padding: 1rem;
    color:#505050;
    display:block;
    text-decoration:none;
}
  ul { 
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    max-width: 100%;
    li { 
      display: inline-block; 
      a {
        background:#ddd;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        z-index: -1;
        
        transform-origin: bottom;
      }
      .active{
        background:#fff;
        color:#000;
      }
    }
  }
  @media (min-width: 480px) {
    visibility: visible;
  }
}

.visible-title {
  visibility: visible;
}


.content{ 
  margin: 0 auto;
  padding: 4rem 0;
  width: 960px;
  max-width: 100%;
}



`;