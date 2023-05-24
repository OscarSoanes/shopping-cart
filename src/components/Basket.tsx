import { useEffect, useState } from "react";
import { BasketInterface } from "../functions/basket";
import { BasketComponent } from "./BasketComponent";
import { getById } from "../functions/api";

export function Basket({
  basket,
  updateBasket,
  deleteProduct,
}: {
  basket: Array<BasketInterface>;
  updateBasket: Function;
  deleteProduct: Function;
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    let total = 0;
    let length = 0;

    basket.forEach((product) => {
      const productData = getById(parseInt(product.productId));
      total += productData!.price * parseInt(product.quantity);
      length += parseInt(product.quantity);
    });

    setTotalPrice(total);
    setTotalLength(length);
  }, [basket]);

  return (
    <main className='grid md:grid-cols-3 px-2 py-4 gap-2 md:px-8'>
      <h2 className='col-span-3 text-2xl mb-4 ml-4'>Your Shopping Bag</h2>

      <section className='grid gap-4 col-span-3 md:col-span-2 pb-8 border-gray-300 border-b'>
        {basket.map((product, index) => (
          <BasketComponent
            key={index}
            productInBasket={product}
            updateBasket={updateBasket}
            deleteProduct={deleteProduct}
          />
        ))}
      </section>
      <section className='col-span-3 md:col-span-1 mx-12 md:mx-0'>
        <div className='justify-end hidden md:flex'>
          <button className='bg-black text-white border-2 border-black hover:bg-white hover:text-black p-2 w-1/2'>
            Proceed To Checkout
          </button>
        </div>

        <section className='my-4 border-b border-gray-200 pb-4'>
          <h2 className='text-xl font-oswald pb-4 mb-4 border-b border-gray-300 '>Overview</h2>

          <div className='flex justify-between mb-4'>
            <p>Subtotal</p>
            <p className='text-lg'>£{totalPrice.toFixed(2)}</p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p>Standard Delivery</p>
              <p className='text-sm'>within 4 to 5 working days</p>
            </div>
            <p>{totalPrice > 30 ? "Free" : "£3.99"}</p>
          </div>

          <label htmlFor='promoCode'>
            <p className='mt-8'>Promo Code:</p>
            <input
              className='bg-gray-200 w-full p-2 placeholder-shown:italic'
              type='text'
              name='promoCode'
              id='promoCode'
              placeholder='Enter a promo coupon!'
            />
          </label>
        </section>

        <section>
          <div className='flex justify-between mb-4 text-xl font-medium'>
            <p>Total ({totalLength} items) inc. VAT</p>
            <p>£{totalPrice > 30 ? totalPrice.toFixed(2) : (totalPrice + 3.99).toFixed(2)}</p>
          </div>

          <button className='bg-black text-white border-2 border-black hover:bg-white hover:text-black p-2 w-full'>
            Proceed to Checkout
          </button>

          <button className='border-2 border-black mt-4 w-full p-2 hover:bg-slate-300 hover:border-slate-300'>
            Checkout with PayPal
          </button>
          <p className='text-xs mt-1'>
            By clicking on "Checkout with PayPal" I agree to the{" "}
            <span className='underline cursor-pointer'>terms and conditions</span> and{" "}
            <span className='underline cursor-pointer'>privacy notice</span>.
          </p>
        </section>
      </section>
    </main>
  );
}
