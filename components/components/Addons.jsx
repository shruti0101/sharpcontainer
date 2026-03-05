import React from 'react'

const Addons = () => {
  return (
    <div>
          {/* features */}

      <div className="w-full  mx-auto  bg-[#deefff] rounded-2xl py-8 ">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="/image/addons/3.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">ISO 50001 Certification</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <img src="/image/addons/gem.png" className="h-22 w-35" />
            <p className="font-semibold text-gray-900 text-xl">GEM Approved Products</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/certificate (1).webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">All Necessary Certificates</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/CDSCO-Import-License.webp" className="h-18 w-22" />
            <p className="font-semibold text-gray-900 text-xl">CDSCO License</p>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2">
            <img src="/meeting.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">Experience Certificate for Tender</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addons