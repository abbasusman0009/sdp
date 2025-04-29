import React from 'react';

export const ConfirmationCard = ({ formData }) => {
  return (
    <div className="bg-[#F5FFFA] border-dashed border-[#0E874E] grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center shadow-sm border rounded-lg w-full sm:w-[490px] h-auto p-6">
      <div className="space-y-8">
        <p>Name:</p>
        <p>Membership ID:</p>
        <p>Membership Type:</p>
        <p>Registration Date:</p>
      </div>
      <div className="space-y-8 self-start sm:self-end">
        <p>{formData.firstName} {formData.lastName}</p>
        <p>SDY-368141</p>
        <p>Standard</p>
        <p>24/03/2025</p>
      </div>
    </div>
  );
};
