import React, { useState } from 'react'
import { Product } from '../Product/Product'
import { toast } from 'react-hot-toast';
import Drawer from '../Drawer/Drawer';
export const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
            .then(res=>res.json())
            .then(json=>{
              setProducts(json)
              setIsLoading(false);
            })
    const addToCart = (product) => {
        myCart.push(product);
        console.log(myCart);
        toast.success(`Successfully added.`);
    }


    return (
      <div className='container mx-auto'>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className='text-center text-3xl py-3 font-bold'>Products</h1>
        <div>
        <button className="btn btn-ghost btn-circle" onClick={() => setIsOpen(true)}>
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm badge-secondary indicator-item">{myCart.length}</span>
          </div>
        </button>       
        </div>
      </div>
        {isLoading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-3'>
            {/* Render skeleton elements for each card */}
            {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4 w-full animate-pulse">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-3'>
            {products.map((product) => (
              <Product product={product} addToCart={() => addToCart(product)} key={product.id} />
            ))}
          </div>
        )}
        <Drawer myCart={myCart} isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
      </div>
    );
    
}
