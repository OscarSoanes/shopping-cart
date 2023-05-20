import { useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { Link } from "react-router-dom";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
import { TbListSearch } from "react-icons/tb";
import Banner from "../media/banner.webp";

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth > 840) {
      setShowMobile(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header className='flex justify-between px-8 gap-8 items-center bg-white py-4'>
      <button className='md:hidden' onClick={() => setShowMobile(true)}>
        <TbListSearch className='header-icon' />
      </button>

      <Link to='/' className='font-oswald font-extrabold text-2xl'>
        TeeFusion
      </Link>

      <nav
        className={`md:flex md:justify-around ${
          showMobile
            ? "flex flex-col gap-4 absolute top-0 left-0 h-full w-screen sm:w-96 bg-gray-100 p-4"
            : "hidden justify-around grow items-center"
        }`}
        id='menu'
      >
        {showMobile && (
          <div className='flex justify-between items-center -order-2 mb-4'>
            <h2 className='text-4xl font-oswald font-extrabold'>TeeFusion</h2>
            <button
              className='bg-slate-300 rounded p-2 hover:bg-slate-400'
              onClick={() => setShowMobile(false)}
            >
              <AiOutlineClose className='w-8 h-8' />
            </button>
          </div>
        )}

        {showMobile && (
          <img
            src={Banner}
            alt='Two people wearing christmas t-shirts'
            className='rounded'
          />
        )}

        <div
          className={`${
            showMobile && "flex-col text-center mx-auto text-2xl"
          } flex gap-8`}
        >
          <HeaderLink to='/shop/women' text='Women' mobile={showMobile} />
          <HeaderLink to='/shop/men' text='Men' mobile={showMobile} />
        </div>

        <form
          className={`${
            showMobile && "-order-1 w-max mx-auto"
          } border bg-gray-200 flex rounded-sm focus-within:outline outline-black outline-2`}
        >
          <label htmlFor='search'>
            <span className='hidden'>Search Product</span>
            <input
              type='text'
              name='search'
              id='search'
              className={`${
                showMobile && ""
              }bg-gray-200 focus:outline-none p-2 pr-0`}
            />
          </label>

          <button type='submit' className='pr-2'>
            <AiOutlineSearch className='header-icon' />
          </button>
        </form>

        <button
          className={`${
            showMobile ? "text-2xl justify-self-end mt-auto" : "w-32"
          } not-built hover:font-semibold`}
        >
          Sign In/ Register
        </button>
      </nav>

      <nav className='flex gap-4'>
        <button className='not-built' aria-label='Wishlist'>
          <AiOutlineHeart className='header-icon' />
        </button>
        <button aria-label='Basket' className='flex gap-1 items-center'>
          <AiOutlineShopping className='header-icon' />
          <p>0</p>
        </button>
      </nav>
    </header>
  );
}
