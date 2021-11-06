import React, {FunctionComponent,useContext} from "react";
import styled from "styled-components";
import {IconCloseWhite,
        ProductOne,
        ProductTwo,
        ProductThree,
        ProductFour,
        ProductOneThumb,
        ProductTwoThumb,
        ProductThreeThumb,
        ProductFourThumb,
        IconNext,
        IconPrevious, } from "../../assets";
import { MainContent} from "../../hooks/ThemeContent";

interface Images {
    [key: number]: string | undefined,
}
const ImagesSRC:Images= {
    1:ProductOne,
    2:ProductTwo,
    3:ProductThree,
    4:ProductFour
}


const Modal:FunctionComponent= () =>{
    
    const { showModal,setModal,imageNum,setImageNum} = useContext(MainContent)
    const changeImage:((num:number)=>number|void) = (num:number) =>{
        setImageNum((prev)=>{
            if ((prev + (num)) > 4){
                return 1
            }else if((prev + (num)) === 0){
                return 4
            }
            else{
               return prev + (num);
            }
        })
   }
    return(
        <div className={(!showModal) ? "modal":undefined}>
        <StyledModal className="img-container">
            <div className="icon-close">
                <img src={IconCloseWhite} alt="" onClick={()=>{setModal(!showModal)}}/>
            </div>
            <div className="product-img-container">
                <img src={ImagesSRC[imageNum]} alt="Product Img" className="product-img"/>
                <div className="carousel-control">
                    <img src={IconPrevious} alt=""  className="previous" onClick={()=>{changeImage(-1)}}/>
                    <img src={IconNext} alt="" className="next" onClick={()=>{changeImage(1)}}/>
                </div>
            </div>
            <div className="thumbnail-container">
                <div className={imageNum === 1 ? "active-thumb":undefined}  onClick={()=>{setImageNum(1)}}>
                    <img src={ProductOneThumb} alt="Product One Thumbnail" />
                </div>
                <div className={imageNum === 2 ? "active-thumb":undefined} onClick={()=>{setImageNum(2)}}>
                    <img src={ProductTwoThumb} alt="Product Two Thumbnail" />
                </div>
                <div className={imageNum === 3 ? "active-thumb":undefined} onClick={()=>{setImageNum(3)}}>
                    <img src={ProductThreeThumb} alt="Product Three Thumbnail" />
                </div>
                <div className={imageNum === 4 ? "active-thumb":undefined} onClick={()=>{setImageNum(4)}}>
                    <img src={ProductFourThumb} alt="Product Four Thumbnail" />
                </div>
            </div>
        </StyledModal>

        </div>
    )
}

const StyledModal = styled.section`
           position:absolute;
           top:0;
           bottom:0;
           left:0;
           right:0;
           display:flex;
           flex-direction:column;
           align-items:end;
           margin:0 auto;
           padding:5% 0;
           max-width:30vw;
           height:100vh;
           background-color:hsl(0, 0%, 0%,0.75);
           box-shadow:50vw 50vh 0 100vmax  hsl(0, 0%, 0%,0.75);
           z-index:1000;

           & .carousel-control{
               width:calc(30vw + 10px);
               display:flex;
               column-gap:calc(30vw - 22.4px);
               padding:0;
               margin-left:-20px;
               left:0;
           }
           & .active-thumb::before{
               background:white;
           }
           & .thumbnail-container img:hover{
               background:white;
           }
         
`


export default Modal