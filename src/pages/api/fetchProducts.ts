export async function fetchProducts() {
  const response = await fetch(
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC"
  );
  const data = await response.json()
  return data;
}
