import { useEffect } from "react";
import { getAllByGender } from "../functions/api";

export function Shop({ type }: { type: string }) {
  useEffect(() => {
    console.log(getAllByGender(type));
  }, [type]);

  return (
    <main>
      <h1>Shop Page!! {type}</h1>
    </main>
  );
}
