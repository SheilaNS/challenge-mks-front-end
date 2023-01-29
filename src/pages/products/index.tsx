import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { ProductContainer } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  photo: string;
  price: string;
}

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.products);
    });
  }, []);

  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          name={product.name}
          photo={product.photo}
          price={product.price}
        />
      ))}
    </ProductContainer>
  );
}
