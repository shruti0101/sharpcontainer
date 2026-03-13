"use client"
import React, { useEffect, useState } from 'react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/blog")
            .then((r) => r.json())
            .then((b) => {
                setBlogs(b);
                setLoading(false);
            });
    }, []);

    return (<>
        <section
            style={{
               backgroundImage: "url('/image/home/banner3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="py-30 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
               Our Blogs
            </h1>
        </section>

        <section className="py-10 md:px-15 px-5">
            <h2 className='md:text-3xl text-xl text-center font-bold'>Explore Our Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {loading ? <>
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col bg-white shadow-sm animate-pulse">
                            <div className="flex flex-col h-full">
                                <div className="h-48 w-full bg-gray-200"></div>

                                <div className="px-4 py-3 flex flex-col gap-3">

                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>

                                    <div className="mt-auto">
                                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </>
                    : <>
                        {blogs.map((item, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col
                         bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300 group">
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className='relative mb-2'>
                                        <img
                                            src={item?.image}
                                            alt='Loading'
                                            className="h-60 w-full object-cover"
                                        />
                                    </div>
                                    <div className='px-4 py-2'>
                                        <h3 className="text-2xl font-bold text-[#039C98] mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <div className="mt-auto">
                                            <a
                                                href={`/blogs/${item.permalink}`}
                                                className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 transition hover:underline"
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>}
            </div>
        </section>
    </>)
}
