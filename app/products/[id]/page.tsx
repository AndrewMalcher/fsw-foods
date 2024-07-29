import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[360px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />

        <Button>
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
