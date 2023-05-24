import { BasketInterface } from "../functions/basket";
import { BasketComponent } from "./BasketComponent";

export function Basket({
  basket,
  updateBasket,
}: {
  basket: Array<BasketInterface>;
  updateBasket: Function;
}) {
  return (
    <main className='grid md:grid-cols-3 px-2 py-4 gap-2 md:px-8'>
      <h2 className='col-span-3 text-2xl mb-4 ml-4'>Your Shopping Bag</h2>

      <section className='grid gap-4 col-span-2 pb-8 border-gray-300 border-b'>
        {basket.map((product, index) => (
          <BasketComponent key={index} productInBasket={product} updateBasket={updateBasket} />
        ))}
      </section>
      <section></section>
    </main>
  );
}
