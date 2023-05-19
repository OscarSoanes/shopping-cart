import { HeaderLink } from "./HeaderLink";
import { BsFillBasket2Fill } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <h1>TeeFusion</h1>

      <div>
        <HeaderLink to='shop/men' text='Men' />
        <HeaderLink to='shop/women' text='Women' />
      </div>

      <div>
        <BsFillBasket2Fill />
        <p>0</p>
      </div>
    </header>
  );
}
