import React, {FunctionComponent, useContext} from "react"
import {IconWhite,IconMinus,IconPlus} from "../../assets"
import styled from "styled-components";
import { MainContent } from "../../hooks/ThemeContent";

const Details:FunctionComponent = () =>{
    
    const {cartNum,setCartNum,setAddToCart} = useContext(MainContent)
    const changeNum:((num:number)=>number|void) = (num:number) =>{
         setCartNum((prev)=>{
            if((prev + (num)) < 0){
                return 0
            }
            else{
                return prev + (num);
            }
         })
    }
    return (
        <section className="details">
            <h5>SNEAKER COMPANY</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className='content'>
                These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they’ll withstand everything 
                the weather can offer.
            </p>
            <div className="price">
                <h2>$125.00</h2>
                <p>50%</p>
                <p>$250.00</p>
            </div>
            <div className="details-controls">
                <div className="cart-num-control">
                    <button onClick={()=>{changeNum(-1)}}>
                        <img src={IconMinus} alt=""/>
                    </button>
                    <button >{cartNum}</button>
                    <button  onClick={()=>{changeNum(1)}}>
                        <img src={IconPlus} alt=""/>
                    </button>
                </div>
                <StyledButton>
                    <button className="adding-to-cart" onClick={()=>{setAddToCart(cartNum)}}>
                        <img src={IconWhite} alt="Cart Icon "/>
                        Add to carts
                    </button>
                </StyledButton>

            </div>
            

        </section>
    )

}

const StyledButton = styled.div`
    
    & button{
        font-weight:var(--font-bolder);
        color: var(--white);
        background-color:var(--primary-orange);
        border-width:0;
        padding:1rem;
        width:calc(375px - 3rem);
        border-radius: .5rem;
        box-shadow:0px 2rem 2rem var(--primary-pale-orange)
    }
    & img{
        width:1rem;
        margin-right:.5rem;
    }

`


export default Details