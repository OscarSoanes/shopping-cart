import WomenSide from "../media/women-main.webp";
import MenSide from "../media/men-main.jpg";
import NewsLetter from "../media/newsletter.jpg";

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
        <h2 className='text-xl font-oswald mb-2 text-black'>About TeeFusion</h2>
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

      <section className='relative'>
        <img src={NewsLetter} alt='' className='h-48 object-cover w-full' />
        <form
          className='p-8 text-white absolute top-0 bottom-0 h-max my-auto left-0 right-0'
          onSubmit={(e) => e.preventDefault}
        >
          <h2 className='text-xl mb-2 font-bold'>
            Enjoy 10% Off Your First Purchase
          </h2>
          <p className='mb-4 text-sm sm:text-base sm:mb-8'>
            Simply sign up for our news letter and enjoy the welcome discount.
          </p>

          <label htmlFor='email' className='hidden'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            className='bg-transparent border w-full placeholder-white p-2 px-4 placeholder:italic cursor-not-allowed sm:w-96'
          />

          <p className='hidden md:inline w-64 bg-black p-3 ml-4 hover:bg-white hover:border-black hover:text-black'>
            10% off your first purchase
          </p>
        </form>
      </section>
    </main>
  );
}
