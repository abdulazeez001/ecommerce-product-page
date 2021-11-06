import React, {FunctionComponent, useContext} from "react";
import styled from "styled-components";
import {
        ProductOneThumb,
        IconDelete} from "../../assets"
import { MainContent } from "../../hooks/ThemeContent";

const Cart:FunctionComponent = (props) =>{
    const {showCart,addToCart,setAddToCart,setCartNum} = useContext(MainContent)
    return(
        <CartDetails className={showCart?"cart-details ":"cart-details display-cart"}>
                <p>Cart</p>
                <div>
                    { 
                    addToCart === 0?(
                    <div>
                        <p className="empty-cart">Your cart is empty.</p>
                    </div>
                    ):(
                    <div>
                        <div className="cart-short-info">
                    <img src={ProductOneThumb} alt="" />
                    <div className="cart-short-text">
                        <p>Autumn Limited Edition... </p>
                        <p>$125.00 x {addToCart} <span>${125 * addToCart}.00</span></p>
                    </div>
                    <div className="delete-icon-container">
                        <img src={IconDelete} alt="" className="delete-icon" onClick={()=>{setAddToCart(0);setCartNum(0)}}/>
                    </div>
                    </div>
                    <StyledButton>Checkout</StyledButton>
                    </div>
                       )
                    }
                    
                </div>
        </CartDetails>
    )
}


const StyledButton = styled.button`

        font-weight:var(--font-bolder);
        color: var(--white);
        background-color:var(--primary-orange);
        border-width:0;
        padding:1rem;
        width:calc(355px - 3rem);
        border-radius: .5rem;


`
const CartDetails = styled.div`
       width:calc(355px - 3.2rem);
       margin:.5rem;
       padding:1.2rem;
       background-color:var(--white);
       position:absolute;
       z-index:2;
       top:5rem;
       right:5%;
       box-shadow:10px 10px 10px  hsl(0, 0%, 0%,0.2),
                  -10px 0 10px  hsl(0, 0%, 0%,0.2);
       border-radius: .5rem;
       & img{
           width:3rem;
           border-radius:.5rem;
       }

       & > p{
           display:block;
           font-weight:var(--font-bolder);
       }

       & > p::after{
           content:"";
           margin:1.5rem -1.2rem;
           width:calc(355px - .8rem);
           height:1px;
           background-color:var(--grayish-blue);
           display:block;
       }
       & .cart-short-info{
           padding-bottom:1.5rem;
           display:grid;
           grid-template-columns:1fr 3fr 1fr;
           align-items:center;
       }

       & .cart-short-text p{
           color: var(--dark-grayish-blue);
           line-height:1.5rem;

       }
       & .delete-icon{
           width:1rem;
       }

       & .delete-icon-container{
          justify-self:end;
       }

       & span{
           color:var(--Black);
           font-weight:var(--font-bolder)
       }

       & .empty-cart{
           text-align:center;
           font-size:0.9rem;
           color: var(--dark-grayish-blue);
           line-height:1.5rem;
           font-weight:var(--font-bolder);
           padding:3rem
       }

`

export default Cart