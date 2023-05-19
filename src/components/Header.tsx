import { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { BsFillBasket2Fill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header() {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <header className='flex justify-between gap-2 items-center'>
      <h1 className='text-xl font-bold'>TeeFusion</h1>

      <RxHamburgerMenu
        className='sm:hidden'
        onClick={() => setShowMobile(!showMobile)}
      />

      <div className={`${showMobile ? "flex" : "hidden"} sm:flex gap-4`}>
        <HeaderLink to='shop/men' text='Men' />
        <HeaderLink to='shop/women' text='Women' />
      </div>

      <div className='flex items-center gap-1'>
        <BsFillBasket2Fill />
        <p>0</p>
      </div>
    </header>
  );
}
