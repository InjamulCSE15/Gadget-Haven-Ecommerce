import React from 'react'
import { Products } from '../Products/Products'
// import { Cart } from '../Cart/Cart'

export const Home = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../../../../public/assets/image/hero/hero-bg.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-xl ">Explore our curated collection of gadgets designed to enhance your lifestyle. Whether you're a tech enthusiast, a trendsetter, or simply looking for the perfect gift, we've got you covered.</p>
          <button className="inline-block rounded bg-white px-8 py-3 text-2xl font-medium text-gray-700 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white-500">Get Shop</button>
        </div>
      </div>
    </div>
    <Products/>
    </>
  )
}
