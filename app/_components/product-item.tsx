import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      {/* IMAGEM */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-sm"
        />
      </div>

      {/* TITULO, PREÇO E RESTAURANTE */}
      <div>
        <h2>{product.name}</h2>
        <div>
          <h3>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(Number(product.price))}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
