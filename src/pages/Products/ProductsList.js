import { useState } from "react"
import { ProductCard } from "../../components/Elements/ProductCard"
import { FilterBar } from "./components/FilterBar"

export const ProductsList = () => {
  const [show,setShow]=useState(false)
  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between flex flex-wrap items-center mx-auto max-w-screen-xl p-4">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks(15)</span>
            <span>
              <button>
                <i onClick={()=>setShow(!show)} className="bi bi-three-dots-vertical border border-gray-300 dark:border-gray-600"></i>
              </button>
            </span>
        </div>
        <div className="flex flex-wrap justify-center lg-flex-row space-x-4 ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </section>
      {show && <FilterBar setShow={setShow}/>}
    </main>
  )
}
