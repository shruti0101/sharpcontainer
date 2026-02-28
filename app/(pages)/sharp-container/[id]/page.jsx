import { category } from "@/productData";
import SharpContainerDetails from "./SharpContainerDetails";



export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = category
    .flatMap((cat) => cat.products)
    .find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Sharp Container Manufacturer",
      description:
        "The product you are looking for does not exist. Explore our range of sharp containers and needle disposal solutions.",
    };
  }

  const title = `${product.productName} | Bio Medical Sharp Box & Needle Disposal Containers`;

  const description = `Explore the high-quality ${product.productName}, a durable and puncture-proof sharp box for safe disposal of needles and biomedical waste. Ideal for hospitals, clinics, and laboratories. Available for bulk supply across India.`;

  return {
    title,
    description,
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  return <SharpContainerDetails productId={id}/>;
};

export default page;
