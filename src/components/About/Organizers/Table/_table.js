import React,{useEffect,useRef} from "react";
import {StyledTable} from './_style';

const Table = ({   
title,
data
}) => {

 return (
    <StyledTable>  

     <table className="rwd-table">
            {
                data.map((tr,i)=>{
                    return(
                        <tr>
                            <td ><b>{tr[0]}</b></td>
                            <td>{tr[1]}</td>
                            <td>{tr[2]}</td>
                            <td>E-mail.{tr[3]}/ Website.{tr[4]}</td>
                        </tr>
                    )
                })
            }
        
        </table>
    </StyledTable>  
    );
  };

export default Table;

