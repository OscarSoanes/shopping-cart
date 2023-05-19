import { Link } from "react-router-dom";
import {BsFillBasket2Fill} from "react-icons/bs"

export default function Header() {
  return (
    <header>
      <h1>TeeFusion</h1>

      <div>
        <Link to="shop">Shop</Link>
        <Link to="shop/men">Men</Link>
        <Link to="shop/women">Women</Link>
      </div>

      <div>
        <BsFillBasket2Fill />
        <p>0</p>
      </div>
    </header>
  )
}