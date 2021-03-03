import React from 'react'
import './card.css'
import {useSelector, useDispatch} from 'react-redux'
import {deleteBasket} from '../actions/index'


const Cards = (props) => {
    const reducer = useSelector(state => state);
    const dispatch = useDispatch();
    
        return (
            <div>
                {Object.values(reducer.card).map((card) => {
                    return (
                        
                        <div key={card.id.toString()} className="container">
                        <div className='image'>
                            <img className='img1' src={card.imageURL} alt={card.title}/>
                        </div><br/>
                        <div className='title'><span>{card.title}</span></div>
                        <div className='price'><span>{card.price}</span></div>
                        <span className='span'>Sayi:{card.qty}</span>
                        <button alt='deleteItem' onClick = {() => {dispatch(deleteBasket(card))}}>Itemi sil</button>
                    </div>
                    )
                })}
                
            </div>
        )
    }

export default Cards
