import { useEffect } from "react";

export default function Cart({ cart }) {
  const { id, title, image, price, category } = cart;
  return (
    <div
      className="relative w-full px-4"
      
      tabIndex="-1"
    >

      <div className="space-y-6">
        <ul className="space-y-4">
          <li className="flex flex-wrap rounded-md bg-white items-center gap-4 py-2">
            <div className="flex md:gap-4 items-center">
              <img
                src={image}
                alt=""
                className="rounded-md p-1 size-20 object-cover"
              />
              <div className="w-52">
                <h3 className="text-md font-medium text-gray-900">{title}</h3>

                <dl className="mt-0.5 space-y-px text-gray-600">
                  <div className="font-medium text-sm">
                    <dt className="inline">Category:</dt>
                    <dd className="inline pl-1 capitalize">{category}</dd>
                  </div>

                  <div className="font-medium ">
                    <dt className="inline">Price: </dt>
                    <dd className="inline text-xl pl-1">$ {price}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-end gap-2">
              <form>
                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                <div className="flex items-center rounded border border-gray-200">
                  <button type="button" className="flex items-center justify-center size-6 leading-10 text-gray-600 transition opacity-50 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                  </button>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    id="Line1Qty"
                    className="h-8 w-10 rounded bg-white p-0 text-center font-bold text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button type="button" className="flex items-center justify-center size-6 leading-10 text-gray-600 transition opacity-50 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>

                  </button>
                </div>
              </form>

              <button className="md:me-4 text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>


          </li>




        </ul>

        
      </div>
    </div>
  )
}
