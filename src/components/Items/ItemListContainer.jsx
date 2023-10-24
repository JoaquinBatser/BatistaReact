import { collection, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])

  const { brandName } = useParams() 

  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const itemCollection = collection(db, "items")

    getDocs(itemCollection)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
        setItems(allData)
      })
  
  },[])

  useEffect(() => {
    if (brandName) {
      const filtered = items.filter(item => item.brand === brandName);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [items, brandName]);

 
  return (
    <ul className=" min-h-screen content-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 py-32 sm:py-10 px-14 ">
      {
       filteredItems.length > 0 &&
       <ItemList items={filteredItems}/>
      }
        
    </ul>
  
 
  )
}

export default ItemListContainer