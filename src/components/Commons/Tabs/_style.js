import styled,{keyframes} from 'styled-components';
const breakpoint= "680px";

export const StyledTabs =styled.div`



.tabs-header {
  display: table;
  width: 80%;
  list-style-type: none;
  transform: translateY(-100px);
  overflow-x:hidden;
  visibility:hidden;

@media (min-width: ${breakpoint}) {
  visibility:visible;
}
}
  .tabs-header li {
    display: table-cell;
    text-align: center;
    color: #ECF0F1;
    cursor: pointer;
  }
    .tabs-header li > a {
      display: block;
      padding: 15px;
      background: #111;
      transition: all .2s ease-in;
      transform: skew(-40deg);
    }
      .tabs-header li > a span {
        display: block;
        transform: skew(40deg);
      }
    .tabs-header li > a:hover {
      background: #2471A3;
      color: #F7F9F9;
    }
    .tabs-header li.active > a {
      background: #2471A3;
    }
.tabs-content {
  margin-top: 15px;
  position: relative;
  padding: 20px 25px;
  overflow: hidden;
}
  .tabs-content .tabs-textItem {
    display: none;
    transform: translateY(100%);
  }
  .tabs-content .tabs-textItem.show {
    display: block;
    transform: translateY(0);

  }
  
`;
