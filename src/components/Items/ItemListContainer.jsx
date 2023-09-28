import ProductCard from "./ProductCard";

export function Products ({products}) {
  return (
    <main className="">
     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map(( product ) => (
          <ProductCard product={ product }/>
        ))
        } 
      </ul>
    </main>
  )
}