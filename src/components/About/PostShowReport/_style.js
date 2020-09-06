import styled,{keyframes} from 'styled-components';

const breakpoint = "480px";

export const StyledPostShowReport =styled.div`

  .pageName{
    position:absolute;


    padding-bottom:2em;
    h1{
      color:#fff;
      font-size:3rem;
    }
  }
  .intro{
    padding-bottom:2em;
    display:block;
    &__left{
      width:100%;
    }
    &__right{
      width:100%;
    }
    h3{
      font-size:1rem;
    }
    p{
      color:#323232;
      font-size:10px;
    }
    @media (min-width: 480px) {
      display:flex;

    }
  }

  .image1{
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      width:100%;
    }
  }
`;