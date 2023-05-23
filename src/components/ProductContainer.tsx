import { useEffect, useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export function ProductContainer({ product }: any) {
  const [image, setImage] = useState("");

  console.log(product);

  useEffect(() => {
    import(`../media/${product.image}`).then((image) => {
      setImage(image.default);
    });
  }, [product.image]);

  return (
    <div className='relative'>
      <Link to={`/product/${product.id}`}>
        {image && <img src={image} alt={`${product.name} ${product.brand}`} />}

        <div className='px-4 py-2'>
          <p className='text-gray-700 font-semibold'>{product.brand}</p>
          <p>{product.name}</p>
          <p className='font-bold'>£{product.price.toFixed(2)}</p>
        </div>

        <AiOutlineHeart className='absolute top-4 text-3xl right-4' />
      </Link>
    </div>
  );
}
