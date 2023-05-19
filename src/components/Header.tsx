import { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { Link } from "react-router-dom";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

import { TbListSearch } from "react-icons/tb";

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <header className='flex justify-between px-8 gap-8 items-center bg-white py-4'>
      <button className='md:hidden'>
        <TbListSearch className='header-icon' />
      </button>

      <Link to='/' className='font-oswald font-extrabold text-2xl'>
        TeeFusion
      </Link>

      <nav className='justify-around grow items-center hidden md:flex'>
        <div className='flex gap-8'>
          <HeaderLink to='/shop/women' text='Women' />
          <HeaderLink to='/shop/men' text='Men' />
        </div>

        <form className='border bg-gray-200 flex rounded-sm focus-within:outline outline-black outline-2'>
          <label htmlFor='search'>
            <span className='hidden'>Search Product</span>
            <input
              type='text'
              name='search'
              id='search'
              className='bg-gray-200 focus:outline-none p-2 pr-0'
            />
          </label>

          <button type='submit' className='pr-2'>
            <AiOutlineSearch className='header-icon' />
          </button>
        </form>

        <button className='not-built hover:font-semibold w-32'>
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
