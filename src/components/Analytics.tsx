import React, { useState, useEffect } from "react";

const h1design = "text-white text-2xl font-bold ";
const pdesign = "text-md text-white";

export const Analytics = () => {
  const [members, setMembers] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  useEffect(() => {
    const targetMembers = 50000;
    const targetVolunteers = 15000;

    const incrementNumber = (target, setter) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(count);
      }, 50); // Adjust the interval for speed
    };

    incrementNumber(targetMembers, setMembers);
    incrementNumber(targetVolunteers, setVolunteers);
  }, []);

  return (
    <div className="bg-[#13A05E] font-inter mt-20 flex flex-col md:flex-row justify-around items-center p-8 md:p-20">
      <div className="space-y-2">
        <h1 className={h1design}>{members}+ </h1>
        <p className={pdesign}>Members</p>
      </div>
      <div className="space-y-2">
        <h1 className={`${h1design} text-center`}>774</h1>
        <p className={pdesign}>Local Government</p>
      </div>
      <div className="space-y-2">
        <h1 className={h1design}>37</h1>
        <p className={pdesign}>State</p>
      </div>
      <div className="space-y-2">
        <h1 className={h1design}>{volunteers}+ </h1>
        <p className={pdesign}>Volunteers</p>
      </div>
    </div>
  );
};
