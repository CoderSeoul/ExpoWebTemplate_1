import styled,{keyframes} from 'styled-components';


export const StyledFirst =styled.section`
position:relative;
width:100%;
height:100vh;
canvas{
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
}
.title{
	color:#fff;
	z-index: 50; 
	h1{
		font-size:5rem;
	}
}

.buttonSet{
    button{
        width:20%;
        padding:5px;
        margin:5px;
        color:#fff;
        background:rgba(0,0,0,0.5);
        border: 5px solid #fff;
    }
}

.fullsize-bg1 { 
    background:#111;
    position: absolute; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100vh; 
    z-index: -2; 
}
.fullsize-bg2 { 
    content: ""; 
    background-image:radial-gradient(black 1px, transparent 0);
    background-size: 3px 3px; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100vh; 
    z-index: -1; 
}
`;
