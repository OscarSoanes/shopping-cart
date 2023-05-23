import { useEffect, useState } from "react";
import { getAllByGender } from "../functions/api";
import { ProductGrid } from "./ProductGrid";

export function Shop({ type }: { type: string }) {
  const [data, setData] = useState<Array<object>>([]);

  useEffect(() => {
    setData(getAllByGender(type));
  }, [type]);

  return (
    <main>
      <div>
        <h2>{type}'s T-Shirts & Tops</h2>
        <p>{data.length} Items</p>
      </div>

      <ProductGrid data={data} />
    </main>
  );
}
