import { useParams } from "react-router-dom";
import { getAllBySearch } from "../functions/api";
import { ProductGrid } from "./ProductGrid";

export function Search() {
  const params = useParams();
  const query = params["*"]!;
  const data = getAllBySearch(query);

  return (
    <main className='pt-4 p-8'>
      <div className='flex justify-between py-4 pr-4 sm:pr-8 items-center'>
        <h2 className='text-xl'>
          Results for: {query.charAt(0).toUpperCase() + query.substring(1).toLowerCase()}
        </h2>
        <p className='text-sm text-gray-700'>{data.length} Items</p>
      </div>

      {data.length === 0 ? <p>No results found for {query}</p> : <ProductGrid data={data} />}
    </main>
  );
}
