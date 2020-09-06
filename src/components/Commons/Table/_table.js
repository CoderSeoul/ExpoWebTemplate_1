import React,{useEffect,useRef} from "react";
import {StyledTable} from './_style';

const Table = ({   
title,
data,

}) => {

 return (
    <StyledTable>  
      <div className="title">
          <h1>{title}</h1>
      </div>
     <table className="rwd-table">
            {
                data.map((tr,i)=>{
                    return(
                        <tr>
                            {
                            tr.map((col,j)=><td><pre>{col}</pre></td>)
                            }
                        </tr>
                    )
                }
                )
            }
        </table>
    </StyledTable>  
    );
  };

export default Table;

