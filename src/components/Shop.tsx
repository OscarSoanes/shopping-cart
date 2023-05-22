import { useEffect, useState } from "react";
import { getAllByGender } from "../functions/api";

export function Shop({ type }: { type: string }) {
  const [data, setData] = useState<Array<object>>([]);

  useEffect(() => {
    setData(getAllByGender(type));
  }, [type]);

  return (
    <main>
      <h1>Shop Page!! {type}</h1>

      {data.length > 0 ? (
        data.map((product: any) => <p key={product.id}>{product.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
