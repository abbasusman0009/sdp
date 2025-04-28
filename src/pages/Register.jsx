import { Steppers } from "../components/Steppers";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF9F5] -m-10 pt-8 font-inter">
      <h1 className="text-6xl font-bold mb-4 text-[#565656]">Become a Member</h1>
      <p className="text-lg text-[#565656]">Join the SDP Arewa Youths Movement today and be part of our </p>
      <p className="text-lg text-[#565656]">journey towards a progressive Nigeria</p>
      <Steppers />
    </div>
  );
}
