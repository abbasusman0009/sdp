import { Steppers } from "../components/Steppers";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF9F5] -m-10 pt-8 font-inter px-4 sm:px-8 md:px-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#565656] text-center">
        Become a Member
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#565656] text-center mb-2">
        Join the SDP Arewa Youths Movement today and be part of our
      </p>
      <p className="text-base sm:text-lg md:text-xl text-[#565656] text-center mb-6">
        journey towards a progressive Nigeria
      </p>
      <Steppers />
    </div>
  );
};
