import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { Context } from "./Context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import { FaShopify } from "react-icons/fa6";
function Cart() {
  const { Cart, setCart } = useContext(Context);
  const [price, setPrice] = useState(0);

  let Remove = (idx) => {
    let updateCartIndex = Cart.filter((v, i) => {
      return i !== idx;
    });
    toast("Item removed from bag");
    setCart(updateCartIndex);
  };
  function quantity(v, e) {
    setPrice((e.target.value * v.price).toFixed(2));
  }
  return (
    <div className="grid w-[100%]">
      <ToastContainer />
      {/* Nav starts */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link to={"/"}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono ">
                <FaShopify className="text-blue-700 mx-auto text-[30px]"/><span className="font-thin">Eshop</span>
              </span>
            </Link>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div> */}
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50  dark:placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to={"/"}>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to={"/wishlist"}>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Wishlist
                  </a>
                </li>
              </Link>
              <Link to={"/cart"}>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Cart
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <table className="w-[80%] mx-auto my-[100px] border border-slate-500 border-collapse">
        <thead>
          <tr>
            <th className="border border-slate-500 border-collapse">Sno</th>
            <th className="border border-slate-500 border-collapse">
              Product Image
            </th>
            <th className="border border-slate-500 border-collapse">Product</th>
            <th className="border border-slate-500 border-collapse">Price</th>
            <th className="border border-slate-500 border-collapse">Qnt</th>
            <th className="border border-slate-500 border-collapse" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((v, i) => {
            return (
              <tr>
                <td className="border border-slate-500 border-collapse p-2">
                  {i + 1}
                </td>
                <td className="border border-slate-500 border-collapse p-2 ">
                  <img
                    src={v.thumbnail}
                    alt="product thumbnail"
                    className="w-[100px] h-[100px] rounded-[50px] object-contain "
                  />
                </td>
                <td className="border border-slate-500 border-collapse p-2">
                  {v.title}
                </td>
                <td className="border border-slate-500 border-collapse p-2">
                  ${price === 0 ? v.price : price}
                </td>
                <td className="border border-slate-500 border-collapse p-2">
                  <input
                    type="number"
                    name="qnt"
                    id="qnt"
                    placeholder="Qnt"
                    min="1"
                    className="w-[50px] bg-slate-300 text-center focus:border-none focus:outline-none cursor-pointer"
                    onChange={(e) => quantity(v, e)}
                  />
                </td>
                <td className="border border-slate-500 border-collapse p-2">
                  <button className="bg-blue-700 text-white border-none outline-none text-center p-1 rounded-[20px] w-full">
                    Pay
                  </button>
                </td>
                <td className="border border-slate-500 border-collapse p-2">
                  <button
                    className="bg-red-700 text-white border-none outline-none text-center p-1 rounded-[20px] w-full"
                    onClick={() => Remove(i)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;