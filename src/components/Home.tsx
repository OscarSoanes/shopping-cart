import WomenSide from "../media/women-main.webp";
import MenSide from "../media/men-main.jpg";
import { HomeImageContainer } from "./HomeImageContainer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <section className='flex gap-1 relative'>
        <HomeImageContainer src={WomenSide} alt='Shop Women' />
        <HomeImageContainer src={MenSide} alt='Shop Men' />
      </section>

      <section className='py-4 px-8 bg-white leading-4 font-light text-gray-700'>
        <h2 className='text-xl font-oswald mb-2 text-black'>About Tee</h2>
        <p className='mt-2'>
          We believe at TeeFusion, that a great t-shirt is more than just a
          piece of clothing—it's a statement. Our collection features an array
          of trendy and comfortable tees for both{" "}
          <Link className='underline decoration-gray-700' to='/shop/men'>
            men
          </Link>{" "}
          and{" "}
          <Link className='underline decoration-gray-700' to='/shop/women'>
            women
          </Link>
          . Whether you're seeking a casual everyday look or a standout fashion
          statement, TeeFusion has the perfect tee to match your unique
          personality.
        </p>
      </section>
    </main>
  );
}
