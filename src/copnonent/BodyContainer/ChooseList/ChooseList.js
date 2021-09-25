import React from 'react';
import './ChooseList.css'

const ChooseList = (props) => {
    const { name, cast,img } = props.favouritActor
    
    return (
        <div className="items">
            <div> <img src={img} alt="" /></div>
            <div>
                <h3>{name}</h3>
                <h5>{cast}</h5>
                
            </div>
        </div>
    );
};

export default ChooseList;