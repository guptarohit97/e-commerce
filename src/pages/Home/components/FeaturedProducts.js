import React from 'react'
import { ProductCard } from '../../../components/Elements/ProductCard'

export const FeaturedProducts = () => {
  return (
    <section className='my-20'>
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5'>Featured</h1>
        <div className='flex flex-wrap justify-center lg:flex-row  space-x-4'>
            <ProductCard/>
            <ProductCard/>
        </div>
    </section>
  )
}
