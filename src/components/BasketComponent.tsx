import { useEffect, useState } from "react";
import { getById } from "../functions/api";
import { BasketInterface } from "../functions/basket";

export function BasketComponent({ productInBasket }: { productInBasket: BasketInterface }) {
  const [product, setProduct] = useState(Object);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = getById(parseInt(productInBasket.id));
    setProduct(product);
  }, [productInBasket.id]);

  useEffect(() => {
    if (!product.image) {
      return;
    }

    import(`../media/${product.image}`).then((image) => setImage(image.default));
  }, [product]);

  return (
    <section className='grid grid-cols-2 gap-4'>
      <img src={image} alt={`${product.brand} ${product.title}`} />
      <div>
        <h3>{product.name}</h3>
        {product.price && <p>£{product.price.toFixed(2)}</p>}

        <section>
          <h4>Size:</h4>
          <CreateSelect
            options={["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
            target={productInBasket.size}
          />
        </section>

        <section>
          <h4>Quantity:</h4>
          <CreateSelect
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            target={productInBasket.quantity}
          />
        </section>

        <button>Delete</button>
      </div>
    </section>
  );
}

function CreateSelect({ options, target }: { options: Array<String>; target: string }) {
  return (
    <select>
      {options.map((value, index) => (
        <option value='value' key={index} selected={target === value && true}>
          {value}
        </option>
      ))}
    </select>
  );
}
