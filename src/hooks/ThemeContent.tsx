import { createContext, ReactNode, useState } from "react";

interface MainContentType {
  showModal:boolean,
  imageNum:number,
  cartNum:number,
  showSideNav:boolean,
  showCart:boolean,
  addToCart:number,
  setModal:React.Dispatch<React.SetStateAction<boolean>>,
  setImageNum:React.Dispatch<React.SetStateAction<number>>,
  setCartNum:React.Dispatch<React.SetStateAction<number>>,
  setShowSideNav:React.Dispatch<React.SetStateAction<boolean>>,
  setShowCart:React.Dispatch<React.SetStateAction<boolean>>,
  setAddToCart:React.Dispatch<React.SetStateAction<number>>

}
type ProviderChildren = {
  children:ReactNode
}

export const MainContent = createContext({showModal:false,
                                         setModal:()=>{},
                                         imageNum:1,
                                         cartNum:0,
                                         addToCart:0,
                                         setImageNum:()=>{},
                                         showSideNav:false,
                                         setShowSideNav:()=>{},
                                         showCart:false,
                                         setShowCart:()=>{},
                                         setCartNum:()=>{},
                                         setAddToCart:()=>{}} as MainContentType)

const MainContentProvider = ({children}:ProviderChildren) =>{
   const [showModal, setModal] = useState(false)
   const [imageNum, setImageNum] = useState(1)
   const [cartNum, setCartNum] = useState(0)
   const [showSideNav, setShowSideNav] = useState(false)
   const [showCart, setShowCart] = useState(false)
   const [addToCart, setAddToCart] = useState(0)
  return (
    <MainContent.Provider value={{showModal,
                                  setModal,
                                  imageNum,
                                  setImageNum,
                                  showSideNav,
                                  setShowSideNav,
                                  showCart,
                                  setShowCart,
                                  cartNum,
                                  setCartNum,
                                  addToCart,
                                  setAddToCart
                                  }}>
      {children}
    </MainContent.Provider>
  )

}

export default MainContentProvider