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
    <Link to={`/product/${product.id}`}>
      {image && <img src={image} alt={`${product.name} ${product.brand}`} />}
      <div>
        <p>{product.brand}</p>
        <p>{product.name}</p>
        <p>£{product.price.toFixed(2)}</p>
      </div>

      <AiOutlineHeart />
    </Link>
  );
}
