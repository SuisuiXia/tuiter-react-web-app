import React from "react";
import * as Icon from 'react-bootstrap-icons';

const TuitStats = (
    {tuit} 
) => {
    return(
        <>
            <div className="row text-secondary mt-3">
                <div className="col"><Icon.Chat/>
                    <span>     {tuit.replies}</span></div>
                <div className="col"><Icon.Repeat/>
                    <span>     {tuit.retuits}</span></div>
                <div className="col">
                {tuit.liked && <Icon.HeartFill  style={{color:"red"}}/>}
                {!tuit.liked && <Icon.HeartFill  />}
                <span>     {tuit.likes}</span>
                </div>
        
                <button className="col text-secondary border-0 bg-transparent text-start">
                    <Icon.Share  />
                </button>
            </div>
        </>
    )
}
export default TuitStats;
