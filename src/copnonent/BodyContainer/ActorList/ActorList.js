
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart,  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ActorList.css'
import {  faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
const ActorList = (props) => {
    const { name, cast, img, age, religion, charges } = props.actor;
    const icon = <FontAwesomeIcon icon={faHeart} />


    
    
    return (
        <div className="cart">
            <div className='image'>
                <img src={img} alt="" />
                
            </div>
            <div className="details">
                <p><span>Name:</span> { name}</p>
                <p><span>Cast as:</span> { cast}</p>
                <p><span>Religion:</span> { religion}</p>
                <p><span>Age:</span> { age}</p>
                <p><span>Charges:</span> ${charges}</p>
                

            </div>
            <br />
            <button onClick={()=>props.clickAddButton(props.actor)}>{icon} Add to favourit</button>
            <div className="socialIcon">
                
                <span className="fontIcon"> <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></span>
                <span className="fontIcon" > <a href="#"><FontAwesomeIcon icon={faInstagram} /></a></span>
                
            </div>
            
            

        </div>
    );
};

export default ActorList;