import Image from "next/image";
import { db } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import { formatCurrency } from "@/app/_helpers/price";
import ProductImage from "./_components/product-image";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <ProductImage product={product} />
      {/* TÍTULO E PREÇO */}
      <div className="p-5">
        {/* RESTAURANTE */}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="object cover rounded-full"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>

        {/* NOME DO PRODUTO */}
        <h1 className="mb-3 mt-1 text-xl font-semibold">{product.name}</h1>

        {/* PREÇO DO PRODUTO E QUANTIDADE */}
        <div className="flex justify-between">
          {/* PREÇO */}
          <div className="item-center flex">
            <h2 className="text-xl font-semibold">
              {formatCurrency(Number(product.price))}
            </h2>
            {product.discountPercentage > 0 && (
              <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded"></div>
            )}
          </div>
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
