/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{FunctionComponent, useContext} from "react";
import { Icon,Logo,Avatar,IconMenu} from "../../assets";
import { MainContent } from "../../hooks/ThemeContent";
import Cart from "../Cart/cart";
import MobileSideBar from "../MobileSideNav/mobileSideNav";




 interface Props {cartNumber?:number | string}

const Header:FunctionComponent<Props> = (props) =>{
    const {setShowSideNav,setShowCart,showCart,addToCart} = useContext(MainContent)
    return(
        <>
        <header>
             
            <div className='logo-container'>
                <div>
                    <img src={IconMenu} alt="" className="menu" onClick={()=>{setShowSideNav(true)}}/>
                </div>
               <img src={Logo} alt='Logo' className='logo'/>
            </div>
            <div className='nav-container'>
               <ul className='nav-list-container'>
                   <li><a href="#">Collections</a></li>
                   <li><a href="#">Men</a></li>
                   <li><a href="#">Women</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Contact</a></li>
               </ul>
            </div>
            <div className="cart-avatar">
                <div className="cart-container" onClick={()=>{setShowCart(!showCart)}}>
                    <p>{addToCart}</p>
                   <img src={Icon} alt="Cart Icon" className='cart'/>
                </div>
                <img src={Avatar} alt="Avatar" className='avatar'/> 
            </div>
             
        </header>
        <Cart/>
        <MobileSideBar/>
        </>
        
    )

}

export default Header


