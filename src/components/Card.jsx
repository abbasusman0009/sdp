
export const Card = ({ icon, cardTitle, cardDescription }) => {
  return (
    <div class="relative font-inter flex flex-col  bg-white hover:shadow-[#fddcc5] hover:shadow-lg hover:transition-shadow  shadow-sm border border-[#D9D9D9] rounded-lg w-full p-6">
      <div class="flex items-center mb-4">
        {icon}
        <h5 class="ml-3 text-[#565656] text-xl font-semibold">
          {cardTitle}
        </h5>
      </div>
      <p class="block text-[#757575] leading-normal font-light mb-4 ml-7">
        {cardDescription}
      </p>
    </div>
  )
}
