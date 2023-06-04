import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";


const TuitsList = () => {
    const {tuit} = useSelector(state => state.tuit)

    return (
        <ul className="list-group">
            {
                tuit.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit} />
                )
            }
        </ul>
    )
};
export default TuitsList;