import Link from "next/link";
import React from "react";
import { category } from "@/productData";
import { ChevronRight } from "lucide-react";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blogs" },
  ];

  const categories = [
    { label: "Needle Cutter", path: "/needle-cutter" },
    { label: "Sharp Containers", path: "/sharp-container" },
  ];

  const allProducts = category.flatMap((cat) => cat.products);
  console.log(allProducts);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 sm:px-10 ">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Sitemap
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Explore all pages and products easily
          </p>
        </div>

        {/* Static Pages */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Pages</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pages.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="group bg-white border border-gray-200 rounded-xl h-[90px] flex items-center justify-center text-center font-medium text-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="group-hover:text-red-600 transition">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.label}
                className="group bg-white border  flex justify-center items-center  border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Category Title */}
                <Link
                  href={category.path}
                  className="block font-semibold text-gray-900  group-hover:text-red-600 text-center transition"
                >
                  {category.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2   pr-1 ">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3   pr-2 custom-scrollbar">
              {allProducts?.map((product, index) => (
                <Link
                  key={index}
                  href={`/${product.category}/${product.id.toString()}`} // ✅ fix number issue too
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition p-2 rounded-lg hover:bg-gray-50"
                >
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                  <span className="truncate">{product.productName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
