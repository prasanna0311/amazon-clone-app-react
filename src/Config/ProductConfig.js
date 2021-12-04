import React, { useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { productList } from "../Mockdata/Alldata"

export default function ProductConfig({ children }) {
  const [ProductItems] = useState(productList);
  const [carditem, addcardfn] = useState([]);
  const [buyNowItem, ProductDet] = useState();

  //Add card function
  const HandleAddCardFn = (item) => {
    addcardfn([...carditem, item]);
  }

 //Remove card function
  const HandleRemoveCardFn = (item) => {
    const newCardItem = carditem.filter(value => value.id !== item.id);
    addcardfn(newCardItem);
  }

 //Buynow card function
  const HandleBuyNowCard = (item) => {
    ProductDet(item);
  }
  
  return (
    <>
      <ProductContext.Provider
        value={{
          ProductItems,
          HandleAddCardFn,
          carditem,
          HandleRemoveCardFn,
          HandleBuyNowCard,
          buyNowItem
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  )
}