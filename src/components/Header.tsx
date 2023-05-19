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
      <TbListSearch className='sm:hidden' />

      <Link to='/' className='font-oswald font-extrabold text-2xl'>
        TeeFusion
      </Link>

      <nav className='flex justify-around grow items-center'>
        <div className='flex gap-8'>
          <HeaderLink to='/shop/women' text='Women' />
          <HeaderLink to='/shop/men' text='Men' />
        </div>

        <form className='border bg-gray-200 flex p-1 rounded focus-within:outline outline-black outline-2'>
          <label htmlFor='search'>
            <span className='hidden'>Search Product</span>
            <input
              type='text'
              name='search'
              id='search'
              className='bg-gray-200 focus:outline-none'
            />
          </label>

          <button type='submit'>
            <AiOutlineSearch className='header-icon' />
          </button>
        </form>

        <button className='not-built'>Sign In/ Register</button>
      </nav>

      <nav className='flex gap-4'>
        <button className='not-built' aria-label='Wishlist'>
          <AiOutlineHeart className='header-icon' />
        </button>
        <button aria-label='Basket'>
          <AiOutlineShopping className='header-icon' />
        </button>
      </nav>
    </header>
  );
}
