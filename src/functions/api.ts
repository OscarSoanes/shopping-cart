import products from "../products.json"

export function getAllByGender(gender: string) {
  return products.filter((product) => product.for === gender);
}

export function getAllBySearch(query: string) {
  return products.filter((product) => product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query))
}