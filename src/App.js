// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaShopify } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [API, setAPI] = useState("https://dummyjson.com/products?limit=100");
  // let API;
  // Get Categories
  let categoryList = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // All Products
  // console.log(categoriesFilter);
  // console.log(`https://dummyjson.com/products/category/${categoriesFilter}`);

  let productList = () => {
    // if (categoriesFilter === "") {
    //   API = "https://dummyjson.com/products?limit=100";
    //   console.log("ALL PRODUCTS", API);
    // } else {
    //   API = `https://dummyjson.com/products/category/${categoriesFilter}`;
    //   console.log("FILTERED PRODUCTS", API);
    // }
    axios
      .get(API)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Search or filter products by category
  // let filterByCategory = (category) => {
  //   setCategoriesFilter(category);
  //   console.log(category);
  // };
  useEffect(() => {
    categoryList();
    productList();
    // filterByCategory();
  }, []);

  return (
    <div className="w-[100%] grid mx-auto">
      {/* Nav starts */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link to={"/"}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono">
                <FaShopify className="text-blue-700 mx-auto text-[30px]" />
                <span className="font-thin">Eshop</span>
              </span>
            </Link>
          </Link>
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
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                onChange={(e) => {
                  setAPI(
                    `https://dummyjson.com/products/search?q=${e.target.value}`
                  );
                  productList();
                  // console.log(
                  //   `https://dummyjson.com/products/search?q=${e.target.value}`
                  // );
                }}
              />
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
      {/* Nav Ends */}
      {/* Main starts */}
      <div className="w-[100%] grid grid-cols-[20%_80%] my-[120px]">
        <div className="Categories">
          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {categories.length > 0
              ? categories.map((v, i) => {
                  // console.log(v);
                  return (
                    <li
                      className="w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white"
                      key={i}
                      onClick={() => {
                        setAPI(
                          `https://dummyjson.com/products/category/${v.slug}`
                        );
                        productList();
                      }}
                    >
                      {v.name}
                    </li>
                  );
                })
              : "No data found"}
          </ul>
        </div>
        <div className="Products grid grid-cols-4 gap-2 px-2">
          {products.map((v, i) => {
            return <Card products={v} index={i} />;
          })}
        </div>
      </div>
      {/* <ToastContainer /> */}
      {/* Main Ends */}
    </div>
  );
}

function Card({ products, key }) {
  // console.log("products", products);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[500px]">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={products.thumbnail}
          alt="product thumbnail"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {products.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
          Brand: {products.brand}
        </p>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
          Price: ${products.price}
        </p>
        <Link to={`/product/${products.id}`}>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Product Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
export default App;
