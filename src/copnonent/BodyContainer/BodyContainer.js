import { faCheck, faDollarSign, faMoneyBill, faMoneyCheck, faPersonBooth, faPiggyBank, faSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ActorList from './ActorList/ActorList';
import './BodyContainer.css'
import ChooseList from './ChooseList/ChooseList';


const BodyContainer = () => {
    const [actorArray, setActorArray] = useState([])
    const [cart, setCart] = useState([])
    const [bugdet, setBugdet] = useState(0)
   

    useEffect(() => {
        fetch('./cast.JSON')
            .then(res => res.json())
            .then(data => setActorArray(data))

    }, [])

    function clickAddButton(selectActor) {
        let newCart = [...cart, selectActor]
        setCart(newCart)
       

    }
    useEffect(() => {
        for (const person of cart) {
            let total = bugdet + person.charges
            setBugdet(total)
          
        }
    },[cart])




    return (
        <div className="container">

            <div className="actorList">

                {
                    actorArray.map(actor => <ActorList clickAddButton={clickAddButton} key={actor.id} actor={actor}></ActorList>)
                }


            </div>

            <div className="choose">
                <h2 ><FontAwesomeIcon icon={faUser}/> Actor add: {cart.length }</h2>
                <h2 ><FontAwesomeIcon icon={faDollarSign} /> Total charges: {bugdet}</h2>


                {
                    cart.map(cartActor => <ChooseList key={Math.round(Math.random() * 10000000)} favouritActor={cartActor}></ChooseList>)
                }
                <button><FontAwesomeIcon icon={faCheck} /> Confirm</button>
            </div>

        </div>
    );
};

export default BodyContainer;