import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import CartContext from '../../context/CartContext/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = ({ id }) => {

    const [ item, setItem ] = useState(null)
    
    const { addItem } = useContext(CartContext)

    const brandSwitch = (brandName) => {
      const brand = brandName
    }
    
    useEffect(() => {
      const db = getFirestore();

      const itemRef = doc(db, "items", id)

      getDoc(itemRef)
        .then( (snapshot) => {
          if(snapshot.exists()) {
            setItem({id: snapshot.id,...snapshot.data()})
          }
        })
        
        

    },[])

    const onAdd = (q) => {
      addItem(item, q)
    }
 

    return (
      
      
      <>
          
          <ItemDetail item={ item } onAdd={onAdd}/>
      </>
    ) 
}

export default ItemDetailContainer