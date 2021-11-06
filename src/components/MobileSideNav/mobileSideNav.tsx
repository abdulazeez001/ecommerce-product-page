/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {FunctionComponent, useContext} from "react";
import styled from "styled-components";
import {IconClose} from "../../assets"
import { MainContent } from "../../hooks/ThemeContent";

const MobileSideBar:FunctionComponent = () =>{
    const {showSideNav,setShowSideNav} = useContext(MainContent)
    return (
        <StyleSideBarNav className={!showSideNav?"sideNav":undefined}>
            <div className="mobile-side-bar">
                <div>
                    <img src={IconClose} alt="" onClick={()=>{setShowSideNav(false)}}/>
                </div>
                <div className="mobile-nav">
                    <ul className='nav-list-container'>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </StyleSideBarNav>
    )

}

const StyleSideBarNav = styled.section`
     position:absolute;
     background-color:white;
     z-index:4;
     top:0;
     bottom:0;
     left:0;
     width:calc(70vw - 3.5rem);
     padding:1.5rem;
     box-shadow:30vw 0px 30vw 30vw hsl(0, 0%, 0%,0.5);
     
     & .nav-list-container li{
        list-style: none;
        padding-bottom:1.5rem;
        
     }
     & .nav-list-container{
         padding: 0
     }
     & img{
        padding-bottom:3rem;
     }
     & a{
         text-decoration:none;
         color:black;
         font-weight:var(--font-bolder);
     }

`


export default MobileSideBar