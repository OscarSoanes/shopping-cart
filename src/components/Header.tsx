import { FormEvent, useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { Link, useNavigate } from "react-router-dom";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
import { TbListSearch } from "react-icons/tb";
import Banner from "../media/banner.webp";

export default function Header({ basket }: { basket: Object[] }) {
  const [showMobile, setShowMobile] = useState(false);
  const navigate = useNavigate();

  function handleResize() {
    if (window.innerWidth > 840) {
      setShowMobile(false);
    }
  }

  function handleForm(e: FormEvent) {
    e.preventDefault();
    const input = document.getElementById("search") as HTMLInputElement;
    const query = input.value;
    input.value = "";

    navigate(`/search/${query}`);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header className='flex justify-between px-8 gap-2 items-center py-4 backdrop-blur-md bg-white/70 shadow'>
      <button className='md:hidden' onClick={() => setShowMobile(true)}>
        <TbListSearch className='header-icon' />
      </button>

      <Link to='/' className='font-oswald font-extrabold text-2xl'>
        TeeFusion
      </Link>

      <nav
        className={`md:flex md:justify-around z-50 ${
          showMobile
            ? "flex flex-col absolute gap-4 top-0 left-0 aside-nav w-screen sm:w-96 p-4 bg-white"
            : "hidden justify-around grow items-center gap-2"
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
          <HeaderLink
            to='/shop/women'
            text='Women'
            mobile={showMobile}
            onClick={setShowMobile}
          />
          <HeaderLink
            to='/shop/men'
            text='Men'
            mobile={showMobile}
            onClick={setShowMobile}
          />
        </div>

        <form
          className={`${
            showMobile && "-order-1 w-max mx-auto"
          } border bg-gray-200 flex rounded-sm focus-within:outline outline-black outline-2`}
          onSubmit={(event) => handleForm(event)}
        >
          <label htmlFor='search'>
            <span className='hidden'>Search Product</span>
            <input
              type='text'
              name='search'
              id='search'
              className={`${
                showMobile && ""
              }bg-gray-200 focus:outline-none p-2 pr-0 lg:w-72`}
            />
          </label>

          <button type='submit' className='px-2'>
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
        <Link
          to='/basket'
          aria-label='Basket'
          className='flex gap-1 items-center'
        >
          <AiOutlineShopping className='header-icon' />
          <p>{basket.length > 99 ? "99+" : basket.length}</p>
        </Link>
      </nav>
    </header>
  );
}
