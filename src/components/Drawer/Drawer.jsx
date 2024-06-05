import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
export default function Drawer({ myCart, isOpen, setIsOpen }) {
    const [cartsData, setCartsData] = useState(myCart);
    useEffect(() => {
        setCartsData(cartsData);
    }, []);
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-gray-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <header className="p-4 flex items-center justify-between font-bold text-lg pl-8">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            My Cart
                            <span className="badge badge-secondary ms-3">{myCart.length}</span>
                        </div>
                        <button onClick={() => {
                            setIsOpen(false);
                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </header>
                    {
                        cartsData.map(cart =>
                            <Cart key={cart.id} cart={cart} />
                        )
                    }
                    <div className="px-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                            <div className="flex justify-end gap-4">
                                <dt>Subtotal</dt>
                                <dd>£250</dd>
                            </div>

                            <div className="flex  justify-end gap-4">
                                <dt>VAT</dt>
                                <dd>£25</dd>
                            </div>

                            <div className="flex  justify-end gap-4">
                                <dt>Discount</dt>
                                <dd>-£20</dd>
                            </div>

                            <div className="flex justify-between !text-base font-medium">
                                <dt>Total</dt>
                                <dd>£200</dd>
                            </div>
                        </dl>
                    </div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
