"use client";

import { category } from "@/productData";
import Link from "next/link";

const SharpContainer = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {category[1]?.products.map(({ id, productName, image }) => {
          return (
            <Link href={`/needle-cutter/${id}`} key={id} className="group">
              <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="h-64 bg-gray-50 p-6 flex items-center justify-center relative">
                  <img
                    src={image?.src}
                    alt={image?.alt || productName}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {productName}
                  </h3>
                  <button className="mt-auto px-5 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center font-medium text-lg ">
                    View Details
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SharpContainer;
