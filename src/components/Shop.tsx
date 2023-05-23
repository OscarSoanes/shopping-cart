import { useEffect, useState } from "react";
import { getAllByGender } from "../functions/api";
import { ProductGrid } from "./ProductGrid";

export function Shop({ type }: { type: string }) {
  const [data, setData] = useState<Array<object>>([]);

  useEffect(() => {
    setData(getAllByGender(type));
  }, [type]);

  return (
    <main className='pt-4 p-8'>
      <div className='flex justify-between py-4 pr-4 sm:pr-8 items-center'>
        <h2 className='text-xl'>
          {type.charAt(0).toUpperCase() + type.substring(1)}'s T-Shirts & Tops
        </h2>
        <p className='text-sm text-gray-700'>{data.length} Items</p>
      </div>

      <ProductGrid data={data} />
    </main>
  );
}
