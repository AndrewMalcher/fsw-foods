import { db } from "@/app/lib/prisma";

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

  return <div>Product Page {id}</div>;
};

export default ProductPage;
