import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>TeeFusion</h1>

      <div>
        <Link to="shop">Shop</Link>
        <Link to="shop/men">Men</Link>
        <Link to="shop/women">Women</Link>
      </div>
    </header>
  )
}