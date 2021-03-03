import React from 'react'
import { connect } from 'react-redux'
import {addBasket} from '../actions/index'
import './products.css'



const products = (props) => {
    console.log(props.products)
   console.log(props.card)
        return (
            <div>
                {props.products.map((product) => (
                    <div key={product.id.toString()} className="container">
                    <div className='image'>
                        <img className='img1' src={product.imageURL} alt={product.title}/>
                    </div><br/>
                    <div className='title'><span>{product.title}</span></div>
                    <div className='price'><span>{product.price}</span></div>
                    <button className="button" type='button' onClick = {() => {props.addBasket(product)}}>Add to Basket</button>
                </div>
                ))}
                
            </div>
        )
    }



const mapStateToProps = state =>{
    return{
        products: state.product,
        card: state.card
    }
}

const mapDispatchToProps = { addBasket }
export default connect(mapStateToProps, mapDispatchToProps) (products)
