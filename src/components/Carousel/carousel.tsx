import React, {FunctionComponent,useContext} from "react";
import { MainContent } from "../../hooks/ThemeContent";
import {ProductOne,
        ProductTwo,
        ProductThree,
        ProductFour,
        ProductOneThumb,
        ProductTwoThumb,
        ProductThreeThumb,
        ProductFourThumb,
        IconNext,
        IconPrevious,
        } from "../../assets"

interface Images {
    [key: number]: string | undefined,
}
const ImagesSRC:Images= {
    1:ProductOne,
    2:ProductTwo,
    3:ProductThree,
    4:ProductFour
}


const Carousel:FunctionComponent = () =>{

    const {showModal, setModal,imageNum,setImageNum} = useContext(MainContent)
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

    return (
            <section className="img-container">
            <div className="product-img-container">
                <img src={ImagesSRC[imageNum]} alt="Product Img" className="product-img" onClick={()=>{setModal(!showModal)}}/>
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
        </section>

        
    )

}

export default Carousel