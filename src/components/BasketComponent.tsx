import { useEffect, useState } from "react";
import { getById } from "../functions/api";
import { BasketInterface } from "../functions/basket";
import { Link } from "react-router-dom";

export function BasketComponent({
  productInBasket,
  updateBasket,
}: {
  productInBasket: BasketInterface;
  updateBasket: Function;
}) {
  const [product, setProduct] = useState(Object);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = getById(parseInt(productInBasket.productId));
    setProduct(product);
  }, [productInBasket.productId]);

  useEffect(() => {
    if (!product.image) {
      return;
    }

    import(`../media/${product.image}`).then((image) => setImage(image.default));
  }, [product]);

  function runUpdateBasket(e: React.ChangeEvent<HTMLSelectElement>, field: string) {
    const value = e.target.value;

    updateBasket(productInBasket.id, field, value);
  }

  return (
    <section className='grid gap-2 basket-container md:gap-8'>
      <Link to={`/product/${product.id}`}>
        <img className='w-48' src={image} alt={`${product.brand} ${product.title}`} />
      </Link>
      <div>
        <h3 className='text-lg font-oswald'>{product.name}</h3>
        {product.price && <p className='text-lg mb-1'>£{product.price.toFixed(2)}</p>}

        <section>
          <h4 className='text-gray-700'>Size:</h4>
          <CreateSelect
            options={["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
            target={productInBasket.size}
            field='size'
            onClick={runUpdateBasket}
          />
        </section>

        <section className='mt-2 mb-4'>
          <h4 className='text-gray-700'>Quantity:</h4>
          <CreateSelect
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            target={productInBasket.quantity}
            field='quantity'
            onClick={runUpdateBasket}
          />
        </section>

        <button className='bg-black text-white border-2 border-black hover:bg-white hover:text-black py-2 px-4'>
          Delete
        </button>
      </div>
    </section>
  );
}

function CreateSelect({
  options,
  target,
  field,
  onClick,
}: {
  options: Array<String>;
  target: string;
  field: string;
  onClick: Function;
}) {
  return (
    <select
      className='w-1/2 p-2 max-w-[200px] min-w-fit rounded-none'
      onChange={(e) => onClick(e, field)}
    >
      {options.map((value, index) => (
        <option value={`${value}`} key={index} selected={target === value && true}>
          {value}
        </option>
      ))}
    </select>
  );
}
