import React from 'react'
import Blogs from './Blogs'

export async function generateMetadata() {
    return {
        title: `Sharp Containers Manufacturer Blogs`,
        description: `Sharp Containers Manufacturer for bulk orders, pricing, and inquiries related to bio medical sharp boxes and needle disposal containers. Quick response and PAN India supply`,
    };
}

export default function page() {
    return (<>
        <Blogs />
    </>)
}
