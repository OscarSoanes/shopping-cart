import { ProductContainer } from "./ProductContainer";

export function ProductGrid({ data }: { data: Array<object> }) {
  return (
    <div>
      {data.length > 0 ? (
        data.map((product: any) => (
          <ProductContainer key={product.id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
