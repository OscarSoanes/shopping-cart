import { BasketInterface } from "../functions/basket";
import { BasketComponent } from "./BasketComponent";

export function Basket({ basket }: { basket: Array<BasketInterface> }) {
  return (
    <main className='grid grid-cols-2'>
      <h2 className='col-span-2'>Your Shopping Bag</h2>

      <section>
        {basket.map((product, index) => (
          <BasketComponent key={index} productInBasket={product} />
        ))}
      </section>
      <section></section>
    </main>
  );
}
