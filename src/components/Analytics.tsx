import React from "react"
const h1design = "text-white text-2xl font-bold";
const pdesign = 'text-md text-white';
export const Analytics = () => {
  return (
    <div className="bg-[#13A05E] font-inter mt-20 flex justify-around items-center p-20">
      <div className="space-y-2">
        <h1 className={h1design}>50000+</h1>
        <p className={pdesign}>Members</p>
      </div>
      <div className="space-y-2">
        <h1 className={h1design}>774</h1>
        <p className={pdesign}>Local Government</p>
      </div>
      <div className="space-y-2">
        <h1 className={h1design}>37</h1>
        <p className={pdesign}>State</p>
      </div>
      <div className="space-y-2">
        <h1 className={h1design}>15000+</h1>
        <p className={pdesign}>Volunteers</p>
      </div>
    </div>
  )
}
