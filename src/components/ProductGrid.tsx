import { ProductContainer } from "./ProductContainer";

export function ProductGrid({ data }: { data: Array<object> }) {
  return (
    <div className='grid products gap-8'>
      {data.length > 0 ? (
        data.map((product: any) => <ProductContainer key={product.id} product={product} />)
      ) : (
        <p className='text-center text-xl'>Loading...</p>
      )}
    </div>
  );
}
