import { useParams } from "react-router-dom";
import { getById } from "../functions/api";

export function Product() {
  const params = useParams();

  const id = params["*"]!;

  const data = getById(parseInt(id));

  return <main>{data && <p>{data.name}</p>}</main>;
}
