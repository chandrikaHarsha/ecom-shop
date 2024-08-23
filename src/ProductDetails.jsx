import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "./Context/MainContext";
import { toast, ToastContainer } from "react-toastify";
import { FaShopify } from "react-icons/fa6";
function ProductDetails() {
  let location = useLocation();
  let pPath = location.pathname;
  let pid = pPath.split("/")[2];

  const [productDetails, setProductDetails] = useState([]);
  const [productImgs, setProductImgs] = useState([]);
  const [productMainImg, setProductMainImg] = useState([]);
  const [flag, setFlag] = useState(false);

  const { wishList, setWishList, Cart, setCart } = useContext(Context);

  //  document.getElementById("count").innerText = wishList.length;

  function SingleProductDetail() {
    axios
      .get(`https://dummyjson.com/products/${pid}`)
      .then((result) => {
        setProductDetails(result.data);
        setProductImgs(result.data.images);
        setProductMainImg(result.data.thumbnail);
        setFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    SingleProductDetail();
  }, []);

  return (
    <div className="grid w-[100%]">
      <ToastContainer />
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link to={"/"}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <FaShopify className="text-blue-700 mx-auto text-[30px]" />
                <span className="font-thin">Eshop</span>
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
              {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> */}
              {/* <svg
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
              <span className="sr-only">Search icon</span> */}
              {/* </div> */}
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
                <li className="relative">
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Wishlist{" "}
                    <span
                      className="absolute top-[-5px] left-[60px] text-[12px] w-[20px] h-[20px] bg-blue-700 text-center rounded-[10px] text-white"
                      id="count"
                    >
                      {wishList.length}
                    </span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[100px]">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div
                  x-show="image === 1"
                  className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                >
                  <img
                    src={productMainImg}
                    alt="product thumbnail"
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
                <div className="flex ">
                  {productImgs.map((v, i) => {
                    return (
                      <div className="flex mx-2">
                        <img
                          src={v}
                          alt="product image from different angles"
                          className="w-[200px] h-[200px] border cursor-pointer object-contain"
                          onMouseOver={() => {
                            setProductMainImg(v);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {productDetails.title}
            </h2>
            <p className="text-gray-500 text-sm">
              By{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                {productDetails.brand}
              </a>
            </p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {productDetails.price}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">
                  Rating: {productDetails.rating}
                </p>
              </div>
            </div>

            <p className="text-gray-500">{productDetails.description}</p>

            {/* <Link to={"/wishlist"}> */}
            <div className="flex py-4 space-x-4">
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={() => {
                  setWishList([...wishList, productDetails]);
                  toast.success("Item added to wishlist!");
                }}
              >
                Add to Wishlist
              </button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
